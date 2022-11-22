const path = require("path");

const REPOSITORY_BASE_DIR = path.resolve("./");

module.exports = ({
    fileName = "main.js", 
    outputDir = path.join(REPOSITORY_BASE_DIR, "output")
}) => {
    return {
        mode: "development",
        entry: {
            [fileName]: path.join(REPOSITORY_BASE_DIR,"src/js/index.js")
        },
        output: {
            filename: fileName,
            path: path.resolve(__dirname, outputDir),
        },
    }
}