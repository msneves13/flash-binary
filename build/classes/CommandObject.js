"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandObject = void 0;
var CommandObject = /** @class */ (function () {
    function CommandObject(assetsFolder, assetsFile, zippedAssetsFile) {
        this.assetsFolder = assetsFolder;
        this.assetsFile = assetsFile;
        this.zippedAssetsFile = zippedAssetsFile;
        this.command = function () { return assetsFolder + assetsFile; };
    }
    return CommandObject;
}());
exports.CommandObject = CommandObject;
