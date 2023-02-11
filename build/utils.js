
const path = require("path");

const BASE_DIRECTORY = path.resolve('./');
const OUTPUT_PATH = path.resolve('./output');

const ENTRY_FILE_NAME = "main";
const __outputDir = process.env.npm_config_outputdir ?? "output/assets";

module.exports = {
    srcJsPath: path.join(BASE_DIRECTORY, 'webapps/js/'),
    entryFile: ENTRY_FILE_NAME,
    outputDir: path.join(BASE_DIRECTORY, __outputDir),
    outputPath: OUTPUT_PATH
};