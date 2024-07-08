/* eslint-disable no-useless-escape */

export const averageEmotePerUser = ({limit, offset = 0, orderBy, orderDirection = 'DESC', virtualWorldUuids = [], countOnly = false, userBlacklist = []}) => {
  const vwFilter = virtualWorldUuids.length ? `AND virtual_worlds.uuid in (${JSON.stringify(virtualWorldUuids).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  const blacklist = userBlacklist.length ? `AND virtual_worlds.cognito_uuid NOT IN (${JSON.stringify(userBlacklist).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  const pagination = limit && !countOnly ? `LIMIT ${limit} OFFSET ${offset}` : '';
  const order = orderBy ? `ORDER BY ${orderBy} ${orderDirection}` : '';
  const query = `SELECT
        id,
        name,
        AVG(emote_count_per_user) AS average
    FROM (
        SELECT
            virtual_worlds.id,
            virtual_worlds.name,
            users_emotes.user_id,
            COUNT(users_emotes.emote_uuid) AS emote_count_per_user
        FROM
            virtual_worlds
        LEFT JOIN virtual_worlds_users ON virtual_worlds_users.vw_id = virtual_worlds.id
        LEFT JOIN users_emotes ON users_emotes.user_id = virtual_worlds_users.user_id
        WHERE users_emotes.is_deleted = false ${vwFilter} ${blacklist}
        GROUP BY virtual_worlds.id, virtual_worlds.name, users_emotes.user_id
    ) AS subquery
    GROUP BY id, name
    ${order}
    ${pagination}
    `;
  
  return countOnly ? `SELECT COUNT(*) as count FROM (${query}) AS subquery` : query;
}

export const rankingUserPerEmote = ({limit, offset = 0, orderBy, orderDirection = 'DESC', virtualWorldUuids = [], emoteUuids = [], userBlacklist = [], countOnly = false}) => {
  const vwFilter = virtualWorldUuids.length ? `AND virtual_worlds.uuid in (${JSON.stringify(virtualWorldUuids).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  const emoteFilter = emoteUuids.length ? `AND users_emotes.emote_uuid in (${JSON.stringify(emoteUuids).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  const blacklist = userBlacklist.length ? `AND virtual_worlds.cognito_uuid NOT IN (${JSON.stringify(userBlacklist).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  const pagination = limit && !countOnly ? `LIMIT ${limit} OFFSET ${offset}` : '';
  const order = orderBy ? `ORDER BY ${orderBy} ${orderDirection}` : '';
  const query = `SELECT
        emote_uuid as uuid,
        sum(user_count_per_emote) as count
    FROM (
        SELECT
            virtual_worlds.uuid,
            COUNT(users_emotes.user_id) as user_count_per_emote,
            users_emotes.emote_uuid
        FROM
            virtual_worlds
        LEFT JOIN virtual_worlds_users ON virtual_worlds_users.vw_id = virtual_worlds.id
        LEFT JOIN users_emotes ON users_emotes.user_id = virtual_worlds_users.user_id
        WHERE virtual_worlds.is_deleted = false AND users_emotes.is_deleted = false
        ${vwFilter} ${emoteFilter} ${blacklist}
        GROUP BY virtual_worlds.uuid, users_emotes.emote_uuid
    ) AS subquery
    GROUP BY emote_uuid
    ${order}
    ${pagination}
    `
  return countOnly ? `SELECT COUNT(*) as count FROM (${query}) AS subquery` : query;
}

export const rankingEmotesPerVW = ({limit, offset = 0, orderBy, orderDirection = 'DESC', virtualWorldUuids = [], isUGE, isDeleted, userBlacklist = [], countOnly = false }) => {
  const vwFilter = virtualWorldUuids.length ? `virtual_worlds.uuid in (${JSON.stringify(virtualWorldUuids).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  const blacklist = userBlacklist.length ? `AND virtual_worlds.cognito_uuid NOT IN (${JSON.stringify(userBlacklist).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  const ugeFilter = isUGE ? `AND users_emotes.is_uge = ${isUGE}\n` : '';
  const deletionFilter = isDeleted ? `AND users_emotes.is_deleted = ${isDeleted}\n` : '';
  const pagination = limit && !countOnly ? `LIMIT ${limit} OFFSET ${offset}` : '';
  const order = orderBy ? `ORDER BY ${orderBy} ${orderDirection}` : '';
  const query = `SELECT
        COUNT(DISTINCT emote_uuid) as emotes,
        name
    FROM (
        SELECT
            virtual_worlds.id,
            virtual_worlds.name,
            users_emotes.emote_uuid
        FROM
            virtual_worlds
        LEFT JOIN virtual_worlds_users ON virtual_worlds_users.vw_id = virtual_worlds.id
        LEFT JOIN users_emotes ON users_emotes.user_id = virtual_worlds_users.user_id
        WHERE virtual_worlds.is_deleted = false
        ${vwFilter} ${ugeFilter} ${deletionFilter} ${blacklist}
        GROUP BY virtual_worlds.id, virtual_worlds.name, users_emotes.emote_uuid
    ) AS subquery
    GROUP BY id, name
    ${order}
    ${pagination}
    `
  return countOnly ? `SELECT COUNT(*) as count FROM (${query}) AS subquery` : query;
}

export const rankingUserData = ({limit, offset = 0, orderBy, orderDirection = 'DESC', userBlacklist = [], userWhitelist = [], countOnly = false}) => {
  const whitelist = userWhitelist.length ? `AND virtual_worlds.cognito_uuid in (${JSON.stringify(userWhitelist).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  const blacklist = userBlacklist.length ? `AND virtual_worlds.cognito_uuid NOT IN (${JSON.stringify(userBlacklist).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  
  const pagination = limit && !countOnly ? `LIMIT ${limit} OFFSET ${offset}` : '';
  const order = orderBy ? `ORDER BY ${orderBy} ${orderDirection} NULLS LAST` : '';
  const query = `SELECT
    virtual_worlds.cognito_uuid,
    cognito_auth.last_connection,
    COUNT(virtual_worlds.id) as vw_count
    FROM virtual_worlds
    LEFT JOIN cognito_auth ON CAST (cognito_auth.cognito_uuid as VARCHAR) = virtual_worlds.cognito_uuid
    WHERE virtual_worlds.is_deleted = false
    ${whitelist}
    ${blacklist}
    GROUP BY virtual_worlds.cognito_uuid, cognito_auth.last_connection
    ${order}
    ${pagination}
    `
  
  return countOnly ? `SELECT COUNT(*) as count FROM (${query}) AS subquery` : query;
}

export const apiKeysByVW = ({limit, offset, orderBy = 'last_usage', orderDirection = 'DESC', virtualWorldUuids = [], userBlacklist = [],  userWhitelist = [], countOnly, cachedValues}) => {
  const whitelist = userWhitelist.length ? `AND virtual_worlds.cognito_uuid IN (${JSON.stringify(userWhitelist).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  const blacklist = userBlacklist.length ? `AND virtual_worlds.cognito_uuid NOT IN (${JSON.stringify(userBlacklist).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  const vwFilter = virtualWorldUuids.length ? `AND virtual_worlds.uuid IN (${JSON.stringify(virtualWorldUuids).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  const pagination = limit && !countOnly ? `LIMIT ${limit} OFFSET ${offset}` : '';
  const order = orderBy ? `ORDER BY ${orderBy} ${orderDirection} NULLS LAST` : '';
  const filter = `WHERE
    virtual_worlds.is_deleted = false
    AND keys.is_deleted = false
    ${vwFilter}
    ${whitelist}
    ${blacklist}
    `
  
  // Build a virtual table with the cache, we will compare this with the last usage of DB stored usages
  const cachedVirtualTable = `WITH values_table AS (
    SELECT
      (jsonb_each_text('${JSON.stringify(cachedValues || {})}'::jsonb)).*
  )`;
  
  const query = `
  ${cachedVirtualTable}
  
  SELECT
    key_value,
    name,
    vw_uuid,
    vw_name,
    cognito_uuid,
  MAX(
    GREATEST(
      last_usage_cache::timestamptz,
      last_usage::timestamptz
    )
  ) AS last_usage
    FROM (
      SELECT
        keys.value as key_value,
        virtual_worlds.uuid as vw_uuid,
        virtual_worlds.name as vw_name,
        values_table.key as last_usage_cache,
        *
      FROM
        keys
        LEFT JOIN virtual_worlds on keys.vw_id = virtual_worlds.id
        LEFT JOIN values_table ON keys.id = values_table.value::integer
        LEFT JOIN usages on usages.key_id = keys.id
      ${filter}
      ORDER BY COALESCE(values_table.key::timestamptz, usages.last_usage)
      ) AS subquery1
  GROUP BY
    key_value,
    name,
    cognito_uuid,
    vw_uuid,
    vw_name
  ${order}
  ${pagination}
  `
  
  // In order to properly count and have a working pagination we just wrap all of this into a counter
  return countOnly ? `SELECT COUNT(*) as count FROM (${query}) AS subquery` : query;
}

export const ugeEmotesCount = (userBlacklist, deleted = false) => {
  const blacklist = userBlacklist.length ? ` virtual_worlds.cognito_uuid NOT IN (${JSON.stringify(userBlacklist).replace(/[\[\]]/g, '').replace(/"/g, "'")}) and\n` : '';
  const deletedFilter = deleted ? 'and users_emotes.is_deleted = true' : '';
  return `SELECT
   COUNT (DISTINCT users_emotes.emote_uuid) count
   FROM users_emotes
   LEFT JOIN virtual_worlds_users on virtual_worlds_users.user_id = users_emotes.user_id
   LEFT JOIN virtual_worlds on virtual_worlds_users.vw_id = virtual_worlds.id
   WHERE ${blacklist} is_uge = true ${deletedFilter} and virtual_worlds.is_deleted = false`
}

export const cognitoAccountsWithUsageCount = ({ userBlacklist = [] }) => {
  const blacklist = userBlacklist.length ? `WHERE cognito_auth.cognito_uuid NOT IN (${JSON.stringify(userBlacklist).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  return `SELECT COUNT(*)
  FROM cognito_auth
  ${blacklist}
  `;
}

export const gameWithKeyPercentage = (userBlacklist) => {
  const blacklist = userBlacklist.length ? `WHERE virtual_worlds.cognito_uuid NOT IN (${JSON.stringify(userBlacklist).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  
  return `SELECT
   CAST(SUM(CASE WHEN keys.id IS NOT NULL THEN 1 ELSE 0 END) AS DECIMAL) / COUNT(*) * 100 as percentage
   FROM virtual_worlds
   LEFT JOIN keys on keys.vw_id = virtual_worlds.id
   ${blacklist}
   `
}

export const accountsWithUGE = (userBlacklist) => {
  const blacklist = userBlacklist.length ? `WHERE virtual_worlds.cognito_uuid NOT IN (${JSON.stringify(userBlacklist).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  
  return `select
    CAST(COUNT(DISTINCT CASE WHEN is_uge = true THEN cognito_uuid END) as DECIMAL)
    / CAST (count (distinct virtual_worlds.cognito_uuid) as decimal)
    * 100 as percentage
  FROM virtual_worlds
  left join virtual_worlds_users on virtual_worlds.id = virtual_worlds_users.vw_id
  left join users_emotes on virtual_worlds_users.user_id = users_emotes.user_id
  ${blacklist}`
}

export const accountsWithModeration = (userBlacklist) => {
  const blacklist = userBlacklist.length ? `WHERE virtual_worlds.cognito_uuid NOT IN (${JSON.stringify(userBlacklist).replace(/[\[\]]/g, '').replace(/"/g, "'")})\n` : '';
  
  return `select
    CAST(COUNT(DISTINCT CASE WHEN users_emotes.is_deleted = true THEN cognito_uuid END) as DECIMAL)
    / CAST (count (distinct virtual_worlds.cognito_uuid) as decimal)
    * 100 as percentage
  FROM virtual_worlds
  left join virtual_worlds_users on virtual_worlds.id = virtual_worlds_users.vw_id
  left join users_emotes on virtual_worlds_users.user_id = users_emotes.user_id
  ${blacklist}`
}