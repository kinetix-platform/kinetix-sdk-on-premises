#!/usr/bin/env node
import dotenv from "dotenv-safe";
dotenv.config({
  allowEmptyValues: true,
  example: ".env.example",
});

import { initDB, closeDB } from "#common/database/sequelize.js";
import * as p from "@clack/prompts";
import cliProgress from "cli-progress";
import color from "picocolors";
import { generateUserTokens } from "#common/helpers/cognito.js";
import KinetixSDK from "#common/services/kinetix/sdk.js";
import virtualWorldService from "#common/services/repository/virtualWorld.js";
import userService from "#common/services/repository/user.js";
import { verifier } from "#common/helpers/cognito.js";
import userEmotesService from "#common/services/repository/userEmotes.js";

const SDK = new KinetixSDK();

const okBye = (code = 0) => {
  p.outro(`${color.bgMagenta(color.black(`Ok. Bye!`))}`);
  process.exit(code);
};

const ifCancelExit = (value) => {
  if (p.isCancel(value)) {
    okBye(130);
  }
};

const askEmail = async () => {
  const value = await p.text({
    message: "Please enter your email login:",
    placeholder: "sam@kinetix.tech",
    validate(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value || value.length === 0) return "email is required !";
      if (!emailRegex.test(value)) return "email is invalid !";
    },
  });

  ifCancelExit(value);
  return value;
};

const askPassword = async () => {
  const value = await p.password({
    message: "Please enter your password:",
    mask: "*",
    validate(value) {
      if (!value || value.length === 0) return "password is required !";
    },
  });

  ifCancelExit(value);
  return value;
};

const initConnection = async () => {
  const s = p.spinner();
  try {
    let tokens;
    let successAuthentication = false;
    do {
      let email = await askEmail();
      let password = await askPassword();

      s.start("Connecting to the Saas SDK API");
      tokens = await generateUserTokens(email, password);
      if (tokens.error) {
        s.stop(tokens.error.message, 401);
      } else {
        s.stop("Connected to the Saas SDK API");
        successAuthentication = true;
      }
    } while (!successAuthentication);

    return tokens;
  } catch (error) {
    console.log(error);
    s.stop("An error occured during connection", 500);
  }
};

const selectVW = async (tokens) => {
  const s = p.spinner();
  try {
    s.start("List virtual worls in pending");
    const vws = await SDK.getVirtualWorlds(tokens.AccessToken);
    s.stop("List virtual worls done");

    if (vws.length === 0) {
      p.outro(
        `${color.bgMagenta(color.black(`You don't have any virtual world to import`))}`,
      );
      process.exit(0);
    }

    const vw = p.select({
      message: "Select the virtual world you want to import",
      options: vws.map((vw) => ({ value: vw, label: vw.name })),
    });

    return vw;
  } catch (error) {
    s.stop(`List virtual worls failed: ${error.message}`, 500);
  }
};

const listUsers = async (tokens, vw) => {
  const s = p.spinner();
  try {
    s.start("Listing users");
    const users = await SDK.getUsers(tokens.AccessToken, vw.uuid);

    if (users.length === 0) {
      s.stop("Listing users done");
      p.outro(
        `${color.bgMagenta(color.black(`You don't have any users to import`))}`,
      );
      process.exit(0);
    } else {
      s.stop(`Listing users done`);
      return users;
    }
  } catch (error) {
    s.stop(`Listing users failed: ${error.message}`, 500);
  }
};

const importVW = async (tokens, vw, users) => {
  const s = p.spinner();
  try {
    s.start("Connection to the database in pending");
    const connected = await initDB(true);
    if (!connected) {
      p.outro(
        `${color.bgMagenta(color.black(`Cannot connect to the database, please check your configuration`))}`,
      );
      process.exit(150);
    } else {
      s.stop("Connected to the database");
    }

    s.start("Recreating virtual world");
    const user = await verifier.verify(tokens.AccessToken);
    const { name, ...configuration } = await SDK.getVirtualWorldConfig(
      tokens.AccessToken,
      vw.uuid,
    );
    const newVW = await virtualWorldService.findOrCreate({
      uuid: vw.uuid,
      name,
      configuration,
      cognitoUuid: user.sub,
    });
    s.stop(
      newVW.isNewRecord
        ? "Virtual world created"
        : "Virtual world already exists",
    );

    await importUsers(tokens, newVW, users);
  } catch (error) {
    p.log.error(error.message);
    await closeDB();
    throw error;
  }
};

const importUsers = async (tokens, vw, users) => {
  const multibar = new cliProgress.MultiBar(
    {
      stopOnComplete: true,
      clearOnComplete: true,
      hideCursor: true,
      format: " {bar} | {name} | {value}/{total}",
    },
    cliProgress.Presets.shades_classic,
  );

  try {
    const usersBar = multibar.create(users.length, 0, { name: "Users" });
    const emotesBar = multibar.create(
      users.reduce((acc, obj) => acc + obj.emotesCount, 0),
      0,
      { name: "Emotes" },
    );

    for (let i = 0; i < users.length; i++) {
      const user = await userService.findOrCreate(vw, users[i].virtualWorldId);
      user.isNewRecord = user._options.isNewRecord;
      // p.log.info(`User ${user.externalId} ${user.isNewRecord ? 'imported' : 'already exists'}`);
      await importBag(tokens, vw, user, emotesBar);
      usersBar.increment();
    }
  } catch (error) {
    console.error(error);
  } finally {
    multibar.stop();
  }
};

const importBag = async (tokens, vw, user, emotesBar) => {
  const bag = await SDK.getUsersEmotes(
    tokens.AccessToken,
    vw.uuid,
    user.externalId,
  );
  const promises = bag.map((emote) => importEmote(user, emote, emotesBar));
  await Promise.all(promises);
  console.log(bag);
};

const importEmote = async (user, emote, emotesBar) => {
  try {
    const newEmote = userEmotesService.findOrCreate(emote);
    console.log(newEmote);
  } catch (error) {
    console.error(error);
  } finally {
    emotesBar.increment(user.emotesCount);
  }
};

const main = async () => {
  console.clear();

  p.intro(
    `${color.bgMagenta(color.black(" Welcome in Kinetix's virtual world importer "))}`,
  );

  const shouldContinue = await p.confirm({
    message: "Do you want to import an existing virtual world ?",
  });

  if (shouldContinue) {
    const tokens = await initConnection();
    const vw = await selectVW(tokens);
    const users = await listUsers(tokens, vw);
    const shouldImport = await p.confirm({
      message: `Do you want to import ${users.length} users with ${users.reduce((acc, obj) => acc + obj.emotesCount, 0)} emotes ?`,
    });

    if (shouldImport) {
      await importVW(tokens, vw, users);
      p.outro(
        `${color.bgMagenta(color.black(`You succeed importing the virtual world ${vw.name}`))}`,
      );
    } else {
      okBye();
    }
  } else {
    okBye();
  }
  process.exit(0);
};

main().catch(console.error);
