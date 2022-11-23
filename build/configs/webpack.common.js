const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const REPOSITORY_BASE_DIR = path.resolve('./');
const SRCPATH = path.join(REPOSITORY_BASE_DIR, '/src/js');

module.exports = ({
  fileName = 'main.js',
  outputDir = path.join(REPOSITORY_BASE_DIR, 'output'),
  devServerPort = 1234
}) => ({
  mode: 'development',
  entry: {
    [fileName]: path.join(REPOSITORY_BASE_DIR, 'src/js/index.js')
  },

  output: {
    filename: fileName,
    path: path.resolve(__dirname, outputDir)
  },

  devServer: {
    static: {
      directory: outputDir
    },
    port: devServerPort,
    hot: true,
    liveReload: true
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new ESLintPlugin({
      context: SRCPATH
    })
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/preset-react']
          }
        }
      }
    ]
  }
});
