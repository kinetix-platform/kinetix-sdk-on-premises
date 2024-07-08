import Key from "./key.js";
import Plan from "./plan.js";
import Usage from "./usage.js";
import User from "./user.js";
import UserActivity from "./userActivity.js";
import VirtualWorld from "./virtualWorld.js";

import VirtualWorldAlias from "./virtualWorldAlias.js";
import VirtualWorldEmote from "./virtualWorldEmote.js";
import VirtualWorldUser from "./virtualWorldUser.js";
import VirtualWorldToken from "./virtualWorldToken.js";
import UserEmote from "./userEmote.js";

export const associationModels = {
  UserEmote,
  VirtualWorldEmote,
  VirtualWorldUser,
  VirtualWorldAlias,
  VirtualWorldToken,
};

export default {
  Key,
  Plan,
  Usage,
  User,
  UserEmote,
  UserActivity,
  VirtualWorld,
};
