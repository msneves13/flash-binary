export class CommandObject {
    
    public assetsFolder: string;
    public assetsFile: string;
    public zippedAssetsFile?: string;
    public command: () => string;

    constructor(assetsFolder: string, assetsFile: string, zippedAssetsFile?: string) {
        this.assetsFolder = assetsFolder;
        this.assetsFile = assetsFile;
        this.zippedAssetsFile = zippedAssetsFile;
        this.command = () => assetsFolder + assetsFile
    }
}