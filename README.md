### Building

You will need npm and Node.js installed. You will also need `pkg` installed (`npm install -g pkg`).

1. Download this repository
2. `cd` to this repository
3. Run `npm install`
    * Note: You need the version of node on your computer to match the version of node `pkg` will bundle.
4. Run `npm build`
5. The binaries will be located in the `dist` folder.

Note: You should build the binaries on the platform you're building for. Specifically Windows, which has some dependencies that aren't installed on Linux and Mac during `npm install`, so they would not be bundled in the binary.

### Testing

You can simply run `npm start` after running `npm install` to test. You can use the `--install` flag too, but it may not work. The installer is designed to be run from the `pkg`ed version.
