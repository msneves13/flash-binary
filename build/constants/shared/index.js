"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOME = exports.ASSETS_DIR = exports.APPLICATION_NAME = void 0;
var path_1 = __importDefault(require("path"));
exports.APPLICATION_NAME = 'DDTank';
exports.ASSETS_DIR = "assets" + path_1.default.sep;
exports.HOME = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
