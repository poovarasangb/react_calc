const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const REPOSITORY_BASE_DIR = path.resolve("./");

module.exports = ({
    fileName = "main.js", 
    outputDir = path.join(REPOSITORY_BASE_DIR, "output"),
    devServerPort = 1234
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

        devServer: {
          static: {
              directory: outputDir
          },
          port: devServerPort,
          hot: true,
          liveReload: true,
        },
        
        plugins: [
          new HtmlWebpackPlugin()
        ],

        module: {
            rules: [
              {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/env','@babel/preset-react'],
                  }
                }
              }
            ]
        }
    }
}