const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ROOT = path.resolve(__dirname, "..");

const paths = {
  /**
   * @param {string[]} relpaths
   */
  root(...relpaths) {
    return path.join(ROOT, ...relpaths);
  },

  /**
   * @param {string[]} relpaths
   */
  src(...relpaths) {
    return path.join(ROOT, "src", ...relpaths);
  },

  /**
   * @param {string[]} relpaths
   */
  build(...relpaths) {
    return path.join(ROOT, "build", ...relpaths);
  },
};

module.exports.paths = paths;

/** @type {import("webpack").Configuration} */
const config = {
  entry: {
    index: [paths.src("index.js")],
  },
  output: {
    path: paths.build(),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: paths.src("index.html"),
      chunks: ["index"],
    }),
  ],
};

module.exports.config = config;
