import path from "path";

export const APPLICATION_NAME = 'DDTank'
export const ASSETS_DIR = "assets" + path.sep;
export const HOME = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];