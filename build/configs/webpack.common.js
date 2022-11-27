const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    new MiniCssExtractPlugin({
    }),
    new ESLintPlugin({
      context: SRCPATH
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
