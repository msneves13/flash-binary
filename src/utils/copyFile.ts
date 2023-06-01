import * as fs from 'fs';

export function copyFile( source: string, destination: string ): Promise<void> {
    return new Promise<void>( (resolve, reject) => {
        try {
            fs.createReadStream(source).pipe(fs.createWriteStream(destination)).on("finish", () => {
                fs.chmodSync(destination, 0o755);
                return resolve();
            });
        }
        catch(err) {
            return reject(err);
        }
    } );
}