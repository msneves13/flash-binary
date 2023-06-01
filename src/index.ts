import extractDmg from "extract-dmg";
import path from "path";
import * as fs from "fs";

import * as MACOS_CONSTANTS from "./constants/macos";
import { ASSETS_DIR } from "./constants/shared";
import { copyFile } from "./utils/copyFile";
import { launchFlash } from "./utils/launchFlash";
import { CommandObject } from "./classes/CommandObject";
import { getCommandObject } from "./utils/getCommandObject";

async function main() {
  const argv = require("minimist")(process.argv.slice(2));
  const commandObject: CommandObject = getCommandObject();


  if (!(process as any).pkg && !argv.install) {
    commandObject.assetsFolder = ASSETS_DIR;
  }

  if (!fs.existsSync(commandObject.assetsFolder)) {
    fs.mkdirSync(commandObject.assetsFolder, { recursive: true });
  }
  if (!fs.existsSync(commandObject.assetsFolder + commandObject.assetsFile)) {
    let binaryToCopy =
      process.platform === "darwin"
        ? commandObject.zippedAssetsFile
        : commandObject.assetsFile;

    await copyFile(
      __dirname + path.sep + ASSETS_DIR + binaryToCopy,
      commandObject.assetsFolder + binaryToCopy
    );

    if (process.platform === "darwin") {
      if (
        !fs.existsSync(
          commandObject.assetsFolder + MACOS_CONSTANTS.MAC_OS_FLASH_FOLDER_NAME
        )
      ) {
        await extractDmg(
          commandObject.assetsFolder + commandObject.zippedAssetsFile,
          commandObject.assetsFolder + MACOS_CONSTANTS.MAC_OS_FLASH_FOLDER_NAME
        );
        if ((process as any).pkg) {
          fs.unlinkSync(
            commandObject.assetsFolder + commandObject.zippedAssetsFile
          );
        }
      }
    }
  }
  launchFlash(
    commandObject.command(),
    argv.url as string
  );
}

main();
