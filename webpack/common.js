const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  entry: [paths.src("index.js")],
  output: {
    path: paths.build(),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: paths.src("index.html"),
    }),
  ],
};

module.exports.config = config;
