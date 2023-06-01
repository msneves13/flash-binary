import { CommandObject } from "../classes/CommandObject";
import * as MACOS_CONSTANTS from "../constants/macos";
import * as LINUX_CONSTANTS from "../constants/linux";
import * as WINDOWS_CONSTANTS from "../constants/windows";

export function getCommandObject(): CommandObject {
    switch (process.platform) {
        case "darwin":
          return new CommandObject(
            MACOS_CONSTANTS.ASSETS_FOLDER,
            MACOS_CONSTANTS.ASSETS_FILE,
            MACOS_CONSTANTS.ZIPPED_ASSETS_FOLDER
          );
        case "win32":
          return new CommandObject(
            WINDOWS_CONSTANTS.ASSETS_FOLDER,
            WINDOWS_CONSTANTS.ASSETS_FILE
          );
        case "linux":
          return new CommandObject(
            LINUX_CONSTANTS.ASSETS_FOLDER,
            LINUX_CONSTANTS.ASSETS_FILE
          );
        default:
            throw new Error("Invalid platform.");
      }
}