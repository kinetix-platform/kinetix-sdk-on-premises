import Key from "./key.js";
import Process from "./process.js";
import Usage from "./usage.js";
import User from "./user.js";
import UserActivity from "./userActivity.js";
import VirtualWorld from "./virtualWorld.js";
import VirtualWorldUser from "./virtualWorldUser.js";
import VirtualWorldToken from "./virtualWorldToken.js";
import UserEmote from "./userEmote.js";

export const associationModels = {
  UserEmote,
  VirtualWorldUser,
  VirtualWorldToken,
  Process,
};

export const models = {
  Key,
  Usage,
  User,
  UserEmote,
  UserActivity,
  VirtualWorld,
};

export const associateModels = async () => {
  const allModels = { ...models, ...associationModels };
  await Promise.all(
    Object.entries(models).map((entry) => entry[1].associate(allModels)),
  );
};

export default {
  models,
  associationModels,
  associateModels,
};
