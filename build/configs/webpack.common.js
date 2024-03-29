const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isProduction = process.env.NODE_ENV === "production";
const BASE_DIRECTORY = path.resolve('./');

const {
    outputPath, entryFile, outputDir, srcJsPath
} = require("../utils.js");

module.exports = () => ({
    mode: 'development',
    entry: {
        [entryFile]: path.join(BASE_DIRECTORY, './src/js/index.js')
    },

    output: {
        filename: (module) =>
            ((isProduction && module.chunk.name.indexOf("main") === -1) ?
                "js/[name].[contenthash].js" : "js/[name].js"),
        chunkFilename: isProduction ? "js/[name].[contenthash].js" : "js/[name].js",
        path: outputDir
    },

    devServer: {
        static: {
            directory: outputPath
        },
        devMiddleware: {
            writeToDisk: true
        },
        port: process.env.npm_config_devserverport ?? 1234,
        hot: true,
        liveReload: true
    },

    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({}),
        new ESLintPlugin({
            context: srcJsPath
        })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                use: {
                    loader: 'esbuild-loader',
                    options: {
                        loader: 'jsx',
                        target: 'es2015',
                        jsx: 'automatic'
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader',
                    options: {
                        esModule: false,
                        url: true,
                        sourceMap: false
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: false,
                        implementation: require('sass')
                    }
                }]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    }
});
