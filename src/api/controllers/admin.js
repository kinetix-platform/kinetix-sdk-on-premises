import httpStatus from "http-status";
import awsService from "#common/services/aws.js";
import vwService from "#common/services/repository/virtualWorld.js";
import storeService from "#common/services/store.js";
import HttpError from "#api/helpers/error.js";
import virtualWorldService from "#common/services/repository/virtualWorld.js";
import dynamoService from "#common/services/dynamo.js";
import { Op, QueryTypes } from "sequelize";
import { processesStats } from "#common/services/stats.js";
import _ from "lodash";
import moment from "moment";
import sequelize from "#common/database/sequelize.js";
import schedulerService from "#common/services/scheduler.js";
import {
  averageEmotePerUser,
  rankingUserPerEmote,
  rankingEmotesPerVW,
  apiKeysByVW,
  ugeEmotesCount,
  gameWithKeyPercentage,
  accountsWithUGE,
  accountsWithModeration,
  rankingUserData,
  cognitoAccountsWithUsageCount,
} from "#common/database/requests/stats/index.js";
import { setPaginationHeaders } from "#common/services/pagination.js";
import cacheService from "#common/services/cache.js";
import { truncate } from "#common/services/string.js";
import XLSX from "node-xlsx";
import User from "#common/database/models/sequelize/user.js";
import UserEmote from "#common/database/models/sequelize/userEmote.js";
import Token from "#common/database/models/sequelize/virtualWorldToken.js";
import logger from "#common/services/logger.js";

const { INTERNAL_SERVER_ERROR, NOT_FOUND } = httpStatus;

class Controller {
  async stats(req, res, next) {
    try {
      const { query } = req;
      const { timeFrame, start, end, email } = query;
      const where = { start, end };
      if (email) {
        const { Users } = await awsService.getCognitoUserByEmail(email);
        if (!Users.length) {
          return next(
            new HttpError(
              null,
              {},
              NOT_FOUND,
              `Account not found for email ${email}.`,
            ),
          );
        }
        const matchingVWs = await virtualWorldService.getAll({
          cognitoUuid: Users[0].Username,
        });
        if (!matchingVWs.length) {
          return next(
            new HttpError(
              null,
              {},
              NOT_FOUND,
              `Virtual world not found for email ${email}.`,
            ),
          );
        }
        where.vw = matchingVWs.map((vw) => vw.id);
      }
      const capitalizedTimeFrame =
        timeFrame && timeFrame?.charAt(0).toUpperCase() + timeFrame?.slice(1);
      const totalProcesses = await dynamoService.getAll(where);
      totalProcesses.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );

      if (!capitalizedTimeFrame) {
        return res.send(processesStats(totalProcesses));
      }

      let groupedResults = _.groupBy(totalProcesses, (result) =>
        moment(result["createdAt"], "DD/MM/YYYY").startOf(
          `${capitalizedTimeFrame}`,
        ),
      );
      const result = Object.entries(groupedResults).reduce((acc, cur) => {
        acc[cur[0]] = processesStats(cur[1]);
        return acc;
      }, {});
      res.send(result);
    } catch (e) {
      return next(new HttpError(e));
    }
  }

  async errorsExport(req, res, next) {
    try {
      const { query } = req;
      const { start, end, email } = query;
      const where = { start, end };
      if (email) {
        const { Users } = await awsService.getCognitoUserByEmail(email);
        if (!Users.length) {
          return next(
            new HttpError(
              null,
              {},
              NOT_FOUND,
              `Account not found for email ${email}.`,
            ),
          );
        }
        const matchingVWs = await virtualWorldService.getAll({
          cognitoUuid: Users[0].Username,
        });
        if (!matchingVWs.length) {
          return next(
            new HttpError(
              null,
              {},
              NOT_FOUND,
              `Virtual world not found for email ${email}.`,
            ),
          );
        }
        where.vw = matchingVWs.map((vw) => vw.id);
      }

      const totalProcesses = await dynamoService.getAll(where);
      totalProcesses.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
      const filtered = totalProcesses.filter(
        (p) => ![0, 5, 6, 7].includes(p.mlReturnCode),
      );

      const files = [
        {
          data: JSON.stringify(filtered, null, "\t"),
          filename: "manifest.json",
        },
      ];

      await Promise.all(
        filtered.map(async (p) => {
          const ml = p?.mlReturnCode
            ? await schedulerService.getProcessInfos(p.uuid)
            : null;
          files.push({
            data: JSON.stringify({ ...p, ml }, null, "\t"),
            filename: `${p.uuid}.json`,
          });
          files.push({
            key: `${p.video}-prepared.mp4`,
            filename: `${p.uuid}.mp4`,
          });
        }),
      );

      const exportName = `ml_errors${email ? `_${email}` : ""}${start ? `_${start.toISOString()}` : ""}${end ? `_${end.toISOString()}` : ""}`;

      res.set("Content-Type", "application/zip");
      res.attachment(`${exportName}.zip`);

      const stream = await awsService.archiveFilesStream(
        exportName,
        files,
        false,
        res,
      );
      stream.pipe(res);
      stream.finalize();
      return res;
    } catch (e) {
      return next(new HttpError(e));
    }
  }

  async listEmotes(req, res, next) {
    try {
      const { query } = req;
      const { limit = 20, offset = 0, search } = query;
      const response = await storeService.searchEmotes({
        limit,
        offset,
        search,
      });
      const totalCount = response.headers["x-pagination-length"];
      setPaginationHeaders(req, res, totalCount, limit, offset);
      res.send({
        result: response.data.data,
      });
    } catch (e) {
      return next(new HttpError(e));
    }
  }

  async listVirtualWorlds(req, res, next) {
    try {
      const { query } = req;
      const { search, email, limit = 20, offset = 0 } = query;
      const where = {};
      if (email) {
        const { Users } = await awsService.getCognitoUserByEmail(email);
        if (!Users.length) {
          return next(
            new HttpError(
              null,
              {},
              NOT_FOUND,
              `Account not found for email ${email}.`,
            ),
          );
        }
        where.cognitoUuid = Users[0].Username;
      }

      if (search) {
        where.name = {
          [Op.iLike]: `%${search}%`,
        };
      }
      const { count, rows: virtualWorlds } = await vwService.getAndCountAll(
        where,
        ["*"],
        { limit, offset },
      );
      setPaginationHeaders(req, res, count, limit, offset);
      res.send(virtualWorlds.map((vw) => vw.toJSON(false)));
    } catch (e) {
      logger.warn(e.message);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }
  async getActivity(req, res, next) {
    try {
      const { uuid } = req.params;
      const virtualWorld = await virtualWorldService.getBy({ uuid });
      if (!virtualWorld) {
        return next(
          new HttpError(null, {}, NOT_FOUND, "VirtualWorld not found."),
        );
      }
      const emotes = await virtualWorld.getEmotes({ raw: true });
      const users = await virtualWorld.getUsers({ raw: true });
      const emotesData = await storeService.getEmotes(emotes);
      const userSummary = users.map((u) => ({
        virtualWorldId: u.virtualWorldId,
        createdAt: u.createdAt,
      }));
      const emoteSummary = emotesData.map((e) => ({
        uuid: e.data.uuid,
        source: e.data.source || "uge",
        created_at: e.data.created_at,
      }));
      res.send({
        emotes: {
          count: {
            total: emoteSummary.length,
            backOffice: emoteSummary.filter((e) => e.source === "backOffice")
              .length,
            studio: emoteSummary.filter((e) => e.source === "studio").length,
            uge: emoteSummary.filter((e) => e.source === "uge").length,
          },
          data: emoteSummary,
        },
        users: {
          count: users.length,
          data: userSummary,
        },
      });
    } catch (e) {
      return next(
        new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async averageEmotesPerUser(req, res, next) {
    try {
      const { limit, offset, orderBy, orderDirection, vwUuids } = req.query;
      const userBlacklist = await awsService.getCognitoInternalBlacklist();
      const count = await sequelize.query(
        averageEmotePerUser({
          countOnly: true,
          virtualWorldUuids: vwUuids,
          userBlacklist,
        }),
        { type: QueryTypes.SELECT },
      );
      const result = await sequelize.query(
        averageEmotePerUser({
          limit,
          offset,
          orderBy,
          orderDirection,
          virtualWorldUuids: vwUuids,
          userBlacklist,
        }),
        { type: QueryTypes.SELECT },
      );
      setPaginationHeaders(req, res, count[0].count, limit, offset);
      res.send({
        result,
      });
    } catch (e) {
      return next(new HttpError(e));
    }
  }

  async rankingUsersPerEmote(req, res, next) {
    try {
      const { limit, offset, vwUuids, emoteUuids, orderBy, orderDirection } =
        req.query;
      const userBlacklist = await awsService.getCognitoInternalBlacklist();
      const count = await sequelize.query(
        rankingUserPerEmote({
          virtualWorldUuids: vwUuids,
          emoteUuids,
          countOnly: true,
          userBlacklist,
        }),
        { type: QueryTypes.SELECT },
      );
      const result = await sequelize.query(
        rankingUserPerEmote({
          limit,
          offset,
          orderBy,
          orderDirection,
          virtualWorldUuids: vwUuids,
          emoteUuids,
          userBlacklist,
        }),
        { type: QueryTypes.SELECT },
      );
      const resultWithName = await Promise.all(
        result.map(async (r) => {
          try {
            const emote = await storeService.getEmote(r.uuid);
            r = { ...r, name: emote.name };
          } catch (e) {
            logger.warn(e.message);
          }
          return r;
        }),
      );
      setPaginationHeaders(req, res, count[0].count, limit, offset);
      res.send({
        result: resultWithName,
      });
    } catch (e) {
      return next(new HttpError(e));
    }
  }

  async rankingEmotesPerGame(req, res, next) {
    try {
      const {
        limit,
        offset,
        vwUuids,
        orderBy,
        orderDirection,
        isUGE,
        isDeleted,
      } = req.query;
      const userBlacklist = await awsService.getCognitoInternalBlacklist();
      const count = await sequelize.query(
        rankingEmotesPerVW({
          virtualWorldUuids: vwUuids,
          isUGE,
          isDeleted,
          countOnly: true,
          userBlacklist,
        }),
        { type: QueryTypes.SELECT },
      );
      const result = await sequelize.query(
        rankingEmotesPerVW({
          limit,
          offset,
          orderBy,
          orderDirection,
          virtualWorldUuids: vwUuids,
          isUGE,
          isDeleted,
          userBlacklist,
        }),
        { type: QueryTypes.SELECT },
      );
      setPaginationHeaders(req, res, count[0].count, limit, offset);
      res.send({
        result,
      });
    } catch (e) {
      return next(new HttpError(e));
    }
  }

  async apiKeysPerVW(req, res, next) {
    try {
      const {
        limit = 5,
        offset = 0,
        vwUuids,
        orderBy,
        orderDirection,
        email,
      } = req.query;
      const userBlacklist = await awsService.getCognitoInternalBlacklist();
      let whitelist = [];
      if (email) {
        const { Users } = await awsService.getCognitoUserByEmail(email);
        if (!Users.length) {
          return res.send({
            result: [],
          });
        }
        whitelist.push(Users[0].Username);
      }

      const queryParameters = {
        limit,
        offset,
        orderBy,
        orderDirection,
        virtualWorldUuids: vwUuids,
        userWhitelist: whitelist,
        userBlacklist: userBlacklist,
      };

      const count = await sequelize.query(
        apiKeysByVW({ ...queryParameters, countOnly: true }),
        { type: QueryTypes.SELECT },
      );

      // First, fetch the cache to see all usages
      const caches = await cacheService.scan(`*usages:*`);
      const cachedUsages = await Promise.all(
        caches.map(async (rawKey) => {
          const key = rawKey.split(":").slice(1).join(":");
          return cacheService.get(key);
        }),
      );
      const cachedValues = cachedUsages.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.lastUsage]: cur.keyId,
        }),
        {},
      );

      // Include formatted caches usages to query to fetch latest data
      const result = await sequelize.query(
        apiKeysByVW({ ...queryParameters, cachedValues }),
        { type: QueryTypes.SELECT },
      );

      const resultWithEmails = await Promise.all(
        result.map(async (r) => ({
          ...r,
          email: r.cognito_uuid
            ? (await awsService.getCognitoUserInfo(r.cognito_uuid))?.email
            : "[Deleted User]",
          key_value: truncate(r.key_value),
        })),
      );
      setPaginationHeaders(req, res, count[0].count, limit, offset);
      res.send({
        result: resultWithEmails,
      });
    } catch (e) {
      return next(new HttpError(e));
    }
  }

  async userData(req, res, next) {
    try {
      const {
        limit = 5,
        offset = 0,
        orderBy,
        orderDirection,
        email,
      } = req.query;
      const userBlacklist = await awsService.getCognitoInternalBlacklist();
      let whitelist = [];
      if (email) {
        const { Users } = await awsService.getCognitoUserByEmail(email);
        if (!Users.length) {
          return res.send({
            result: [],
          });
        }
        whitelist.push(Users[0].Username);
      }

      const queryParameters = {
        limit,
        offset,
        orderBy,
        orderDirection,
        userWhitelist: whitelist,
        userBlacklist: userBlacklist,
      };

      const count = await sequelize.query(
        rankingUserData({ ...queryParameters, countOnly: true }),
        { type: QueryTypes.SELECT },
      );

      // Include formatted caches usages to query to fetch latest data
      const result = await sequelize.query(rankingUserData(queryParameters), {
        type: QueryTypes.SELECT,
      });

      const resultWithEmails = await Promise.all(
        result.map(async (r) => {
          let userInfo;
          try {
            userInfo = r.cognito_uuid
              ? await awsService.getCognitoUserInfo(r.cognito_uuid)
              : {};
          } catch (e) {
            logger.warn(e.message);
            userInfo = {};
            logger.warn(`user ${r.cognito_uuid} not found`);
          }

          return {
            ...r,
            email: userInfo.email || "[Deleted User]",
            first_name: userInfo.given_name,
            last_name: userInfo.family_name,
            company: userInfo["custom:company_name"],
            user_name: userInfo.given_name
              ? `${userInfo.given_name} ${userInfo.family_name}`
              : undefined,
          };
        }),
      );
      setPaginationHeaders(req, res, count[0].count, limit, offset);
      res.send({
        result: resultWithEmails,
      });
    } catch (e) {
      return next(new HttpError(e));
    }
  }

  async aggregateTotal(req, res, next) {
    try {
      const userBlacklist = await awsService.getCognitoInternalBlacklist();
      const avatars = await storeService.getTotalAvatarCount();
      const accounts = await sequelize.query(
        cognitoAccountsWithUsageCount(userBlacklist),
        { type: QueryTypes.SELECT },
      );
      const ugeEmotes = await sequelize.query(ugeEmotesCount(userBlacklist), {
        type: QueryTypes.SELECT,
      });
      const ugeEmotesDeleted = await sequelize.query(
        ugeEmotesCount(userBlacklist, true),
        { type: QueryTypes.SELECT },
      );
      const result = {
        accounts: parseInt(accounts[0].count),
        avatars,
        ugc_emotes_owned: parseInt(ugeEmotes[0].count),
        ugc_emotes_deleted: parseInt(ugeEmotesDeleted[0].count),
      };
      const arrayResult = Object.entries(result).map(([label, value]) => ({
        label,
        value,
      }));
      res.send({
        result: arrayResult,
      });
    } catch (e) {
      return next(new HttpError(e));
    }
  }

  async aggregateRatio(req, res, next) {
    try {
      const userBlacklist = await awsService.getCognitoInternalBlacklist();
      const gamesWithKey = await sequelize.query(
        gameWithKeyPercentage(userBlacklist),
        { type: QueryTypes.SELECT },
      );
      const accWithUGR = await sequelize.query(accountsWithUGE(userBlacklist), {
        type: QueryTypes.SELECT,
      });
      const accWithModeration = await sequelize.query(
        accountsWithModeration(userBlacklist),
        { type: QueryTypes.SELECT },
      );
      const accWithAvatar = await storeService.getStatsAccountsWithAvatars();
      const result = {
        game_with_key: parseFloat(gamesWithKey[0].percentage),
        account_with_avatar: parseInt(accWithAvatar.data),
        account_with_uge: parseFloat(accWithUGR[0].percentage),
        account_with_moderation: parseFloat(accWithModeration[0].percentage),
      };
      const arrayResult = Object.entries(result).map(([label, value]) => ({
        label,
        value,
      }));
      res.send({
        result: arrayResult,
      });
    } catch (e) {
      return next(new HttpError(e));
    }
  }

  async avatarsPerAccount(req, res, next) {
    try {
      const { limit, offset, orderBy, orderDirection } = req.query;
      const response = await storeService.getStatsAvatarsPerAccount({
        limit,
        offset,
        orderBy,
        orderDirection,
      });

      const resultWithEmails = await Promise.all(
        response.data.result.map(async (r) => {
          let email;
          try {
            email = r.cognito_uuid
              ? (await awsService.getCognitoUserInfo(r.cognito_uuid))?.email
              : "[Deleted User]";
          } catch (e) {
            logger.warn(e.message);
            email = "";
          }

          return {
            ...r,
            email,
          };
        }),
      );
      const totalCount = response.headers["x-pagination-length"];
      setPaginationHeaders(req, res, totalCount, limit, offset);
      res.send({
        result: resultWithEmails,
      });
    } catch (e) {
      return next(new HttpError(e));
    }
  }

  async accountsWithAvatars(req, res, next) {
    try {
      const { limit, offset, orderBy, orderDirection } = req.query;
      const response = await storeService.getStatsAccountsWithAvatars({
        limit,
        offset,
        orderBy,
        orderDirection,
      });

      const resultWithEmails = await Promise.all(
        response.data.result.map(async (r) => {
          let email;
          try {
            email = r.cognito_uuid
              ? (await awsService.getCognitoUserInfo(r.cognito_uuid))?.email
              : "[Deleted User]";
          } catch (e) {
            logger.warn(e.message);
            email = "";
          }

          return {
            ...r,
            email,
          };
        }),
      );
      const totalCount = response.headers["x-pagination-length"];
      setPaginationHeaders(req, res, totalCount, limit, offset);
      res.send({
        result: resultWithEmails,
      });
    } catch (e) {
      return next(new HttpError(e));
    }
  }

  async impersonate(req, res, next) {
    try {
      const { user, body } = req;
      const { email } = body;
      const { Users } = await awsService.getCognitoUserByEmail(email);
      const userToImpersonate = Users[0];
      if (req.impersonate) {
        return res.status(403).send({
          message: "No impersonate chaining",
        });
      }
      if (!userToImpersonate) {
        return res.status(404).send({
          message: "No user found",
        });
      }

      const keys = await cacheService.scan(`impersonate:${user.username}:*`);
      await Promise.all(
        keys.map((key) => cacheService.del(key.split(":").slice(1).join(":"))),
      );
      await cacheService.set(
        `impersonate:${user.username}:${userToImpersonate.Username}`,
        true,
        3600,
      );
      res.send({
        result: userToImpersonate,
      });
    } catch (e) {
      return next(new HttpError(e));
    }
  }

  async stopImpersonate(req, res, next) {
    try {
      const { adminUser } = req;

      if (!adminUser) {
        return res.status(403).send({
          message: "You are not impersonating",
        });
      }

      const keys = await cacheService.scan(
        `impersonate:${adminUser.username}:*`,
      );
      await Promise.all(
        keys.map((key) => cacheService.del(key.split(":").slice(1).join(":"))),
      );
      res.send({
        message: "Done",
      });
    } catch (e) {
      return next(new HttpError(e));
    }
  }

  async exportStatsByEmail(req, res, next) {
    const getAvatarsByCognito = async (cognitoUuid) => {
      const avatars = await storeService.getAvatarsByCognito(cognitoUuid);
      const avatarsTransformed = avatars.map(
        ({ metadata, files, ...avatar }) => {
          delete avatar.providers;
          delete avatar.brands;
          delete avatar.categories;
          delete avatar.tags;
          delete avatar.cognito;
          avatar.mapped = !!files.find((f) => f.name === "userData");
          avatar.retargetingQuality =
            metadata && metadata?.retargetingQuality === "Premium"
              ? "RT3K"
              : "IK";
          return avatar;
        },
      );

      return avatarsTransformed;
    };

    const getVwsByCognito = async (cognitoUuid) => {
      const vws = await vwService.getAll({ cognitoUuid });
      const virtualWorlds = vws.map(({ dataValues: rawVW }) => {
        const { plan, configuration, ...vw } = rawVW;
        vw.plan = plan.name;
        Object.entries(configuration).forEach(
          ([key, value]) => (vw[key] = value),
        );
        return vw;
      });
      return virtualWorlds;
    };

    const getTokensByCognito = async (cognitoUuid) => {
      const vws = await vwService.getAll({ cognitoUuid }, ["*"], {
        include: [
          {
            model: Token,
            as: "tokens",
          },
        ],
      });

      let consolidatedTokens = [];
      vws.forEach(({ tokens, ...vw }) => {
        const enrichTokens = tokens.map(({ dataValues }) => ({
          id: dataValues.id,
          vwId: vw.dataValues.id,
          vwName: vw.dataValues.name,
          userId: dataValues.userId,
          processUuid: dataValues.processUuid,
          createdAt: dataValues.createdAt,
        }));
        consolidatedTokens = consolidatedTokens.concat(enrichTokens);
      });

      return consolidatedTokens;
    };

    const getPlayersByCognito = async (cognitoUuid) => {
      const vws = await vwService.getAll({ cognitoUuid }, ["*"], {
        include: [
          {
            model: User,
            as: "users",
            include: [
              {
                model: UserEmote,
                as: "emotes",
              },
            ],
          },
        ],
      });

      let players = [];
      vws.forEach(({ users, ...vw }) => {
        const enrichUsers = users.map((user) => ({
          id: user.id,
          name: user.virtualWorldId,
          vwId: vw.dataValues.id,
          vwName: vw.dataValues.name,
          createdAt: user.createdAt,
          numberEmotes: user.emotes.length,
        }));
        players = players.concat(enrichUsers);
      });

      return players;
    };

    const objArrayToExcel = (objArray) => {
      const rows = [];
      if (objArray.length === 0) return rows;

      const entries = Object.keys(objArray[0]);
      rows.push(entries);
      objArray.forEach((item) => {
        const row = [];
        entries.forEach((entry) => {
          row.push(item[entry]);
        });
        rows.push(row);
      });

      return rows;
    };

    try {
      const { email } = req.params;
      const { format } = req.query;
      const user = await awsService.getCognitoUserInfoByEmail(email);
      let totalProcesses = [];
      if (!user) {
        return next(new HttpError(null, {}, NOT_FOUND, "User not founded"));
      }

      const [avatars, virtualWorlds, players, tokens] = await Promise.all([
        getAvatarsByCognito(user.Username),
        getVwsByCognito(user.Username),
        getPlayersByCognito(user.Username),
        getTokensByCognito(user.Username),
      ]);

      if (virtualWorlds.length > 0) {
        totalProcesses = await dynamoService.getAll({
          vw: virtualWorlds.map((vw) => vw.id),
        });

        virtualWorlds.forEach((vw) => {
          vw.numberProcesses = totalProcesses.filter(
            (p) => p.vw === vw.id,
          ).length;
        });

        totalProcesses.forEach((p) => {
          p.vwName = virtualWorlds.find((vw) => vw.id === p.vw).name;
        });

        players.forEach((g) => {
          g.numberProcesses = totalProcesses.filter(
            (p) => p.user === g.id,
          ).length;
        });
      }

      if (format === "json") {
        return res.send({
          user,
          avatars,
          virtualWorlds,
          totalProcesses,
          players,
          tokens,
        });
      }

      const buffer = XLSX.build([
        { name: "User", data: objArrayToExcel([user]) },
        { name: "Avatars", data: objArrayToExcel(avatars) },
        { name: "Virtual Worlds", data: objArrayToExcel(virtualWorlds) },
        { name: "Processes", data: objArrayToExcel(totalProcesses) },
        { name: "Players", data: objArrayToExcel(players) },
      ]);

      res.set(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      );
      res.attachment(`stats_${email}.xlsx`);
      return res.send(buffer);
    } catch (e) {
      return next(new HttpError(e));
    }
  }

  async getByUuid(req, res, next) {
    try {
      const { params } = req;
      const { uuid } = params;
      const search = await dynamoService.getProcessByEmoteOrUuid(uuid);
      if (search.length === 0) {
        return next(
          new HttpError(null, {}, NOT_FOUND, `Cannot found uge ${uuid}`),
        );
      }

      const emote = await storeService.getEmote(uuid);
      res.send(emote);
    } catch (e) {
      return next(new HttpError(e));
    }
  }
}

export default new Controller();
