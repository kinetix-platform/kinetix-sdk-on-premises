import Asset from "./asset.js";
import File from "./file.js";
import Key from "./key.js";
import Process from "./process.js";
import User from "./user.js";
import VirtualWorld from "./virtualWorld.js";
import VirtualWorldToken from "./virtualWorldToken.js";
import UserEmote from "./userEmote.js";

export const associationModels = {
  UserEmote,
  VirtualWorldToken,
};

export const models = {
  Asset,
  File,
  Key,
  Process,
  User,
  UserEmote,
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
