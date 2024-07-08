import express from "express";
import controller from "../../../controllers/admin.js";
import moderationController from "../../../controllers/moderation.js";
import validator from "../../../middlewares/validator.js";
import cognitoAuth from "../../../middlewares/cognitoAuth.js";
import cognitoAdmin from "../../../middlewares/cognitoAdmin.js";
import ownership from "../../../middlewares/virtualWorldOwnership.js";
import {
  getActivity,
  list,
  search,
  stats,
  avgEmotesPerUser,
  rankUsersPerEmote,
  rankModeration,
  listModeration,
  exportStats,
} from "./schema.js";

const router = express.Router();

router.get(
  "/processes/stats",
  validator(stats),
  cognitoAuth,
  cognitoAdmin,
  controller.stats,
);
router.get(
  "/processes/stats/errors-export",
  validator(stats),
  cognitoAuth,
  cognitoAdmin,
  controller.errorsExport,
);
router.get(
  "/virtual-worlds",
  validator(list),
  cognitoAuth,
  cognitoAdmin,
  controller.listVirtualWorlds,
);
router.get(
  "/emotes",
  validator(search),
  cognitoAuth,
  cognitoAdmin,
  controller.listEmotes,
);
router.get(
  "/virtual-worlds/:uuid/activity",
  validator(getActivity),
  cognitoAuth,
  cognitoAdmin,
  controller.getActivity,
);

router.get(
  "/stats/aggregate-total",
  cognitoAuth,
  cognitoAdmin,
  controller.aggregateTotal,
);
router.get(
  "/stats/aggregate-ratio",
  cognitoAuth,
  cognitoAdmin,
  controller.aggregateRatio,
);

router.get(
  "/stats/average-emotes-per-user",
  validator(avgEmotesPerUser),
  cognitoAuth,
  cognitoAdmin,
  controller.averageEmotesPerUser,
);
router.get(
  "/stats/ranking-users-per-emote",
  validator(rankUsersPerEmote),
  cognitoAuth,
  cognitoAdmin,
  controller.rankingUsersPerEmote,
);

router.get(
  "/stats/ranking-emotes-per-vw",
  cognitoAuth,
  cognitoAdmin,
  controller.rankingEmotesPerGame,
);

router.get(
  "/stats/api-keys-per-vw",
  cognitoAuth,
  cognitoAdmin,
  controller.apiKeysPerVW,
);

router.get(
  "/stats/ranking-user-data",
  cognitoAuth,
  cognitoAdmin,
  controller.userData,
);

router.get(
  "/stats/avatars-per-account",
  cognitoAuth,
  cognitoAdmin,
  controller.avatarsPerAccount,
);
router.get(
  "/stats/accounts-with-avatars",
  cognitoAuth,
  cognitoAdmin,
  controller.accountsWithAvatars,
);

router.post("/impersonate", cognitoAuth, cognitoAdmin, controller.impersonate);
router.post(
  "/impersonate/stop",
  cognitoAuth,
  cognitoAdmin,
  controller.stopImpersonate,
);

router.get(
  "/moderation",
  validator(listModeration),
  cognitoAuth,
  cognitoAdmin,
  moderationController.listModeration,
);
router.post(
  "/moderation/virtual-worlds/:uuid/users/:userId/emotes/:emoteUuid/rank",
  validator(rankModeration),
  cognitoAuth,
  cognitoAdmin,
  ownership,
  moderationController.rankModeration,
);

router.get(
  "/export-stats/:email",
  validator(exportStats),
  cognitoAuth,
  cognitoAdmin,
  controller.exportStatsByEmail,
);

router.get(
  "/uges/:uuid",
  validator(getActivity),
  cognitoAuth,
  cognitoAdmin,
  controller.getByUuid,
);

export default router;
