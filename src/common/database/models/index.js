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

export default {
  Key,
  Usage,
  User,
  UserEmote,
  UserActivity,
  VirtualWorld,
};
