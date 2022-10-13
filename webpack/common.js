const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT = path.resolve(__dirname, "..");
module.exports.ROOT = ROOT;

const BUILD_DIRECTORY = path.join(ROOT, "build");
module.exports.BUILD_DIRECTORY = BUILD_DIRECTORY;

/** @type {import("webpack").Configuration} */
const config = {
  entry: path.join(ROOT, "src", "index.html"),
  output: {
    path: BUILD_DIRECTORY,
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

  plugins: [],
};

module.exports.config = config;
