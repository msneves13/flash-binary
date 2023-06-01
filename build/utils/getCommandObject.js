"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommandObject = void 0;
var CommandObject_1 = require("../classes/CommandObject");
var MACOS_CONSTANTS = __importStar(require("../constants/macos"));
var LINUX_CONSTANTS = __importStar(require("../constants/linux"));
var WINDOWS_CONSTANTS = __importStar(require("../constants/windows"));
function getCommandObject() {
    switch (process.platform) {
        case "darwin":
            return new CommandObject_1.CommandObject(MACOS_CONSTANTS.ASSETS_FOLDER, MACOS_CONSTANTS.ASSETS_FILE, MACOS_CONSTANTS.ZIPPED_ASSETS_FOLDER);
        case "win32":
            return new CommandObject_1.CommandObject(WINDOWS_CONSTANTS.ASSETS_FOLDER, WINDOWS_CONSTANTS.ASSETS_FILE);
        case "linux":
            return new CommandObject_1.CommandObject(LINUX_CONSTANTS.ASSETS_FOLDER, LINUX_CONSTANTS.ASSETS_FILE);
        default:
            throw new Error("Invalid platform.");
    }
}
exports.getCommandObject = getCommandObject;
