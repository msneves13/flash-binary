"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASSETS_FILE = exports.ZIPPED_ASSETS_FOLDER = exports.ASSETS_FOLDER = exports.MAC_OS_FLASH_FOLDER_NAME = void 0;
var shared_1 = require("../shared");
exports.MAC_OS_FLASH_FOLDER_NAME = "Flash Player";
exports.ASSETS_FOLDER = shared_1.HOME + "/Library/Application Support/".concat(shared_1.APPLICATION_NAME, "/");
exports.ZIPPED_ASSETS_FOLDER = "flashplayer.dmg";
exports.ASSETS_FILE = "Flash Player/Flash Player.app/Contents/MacOS/Flash Player";
