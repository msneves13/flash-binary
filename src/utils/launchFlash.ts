import * as proc from "child_process";

export function launchFlash( command: string, url: string ): Promise<void> {
    return new Promise<void>( (resolve, reject) => {    
    if( !url ) return reject();
    try {
        proc.execFile(command, [url]);
        return resolve();
    }
    catch(err) {
        return reject(err);
    }
})
}