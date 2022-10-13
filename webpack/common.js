const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT = path.resolve(__dirname, "..");
module.exports.ROOT = ROOT;

const SRC = path.join(ROOT, "src");
module.exports.SRC = SRC;

const BUILD = path.join(ROOT, "build");
module.exports.BUILD = BUILD;

/** @type {import("webpack").Configuration} */
const config = {
  entry: [path.join(SRC, "index.js")],
  output: {
    path: BUILD,
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
      template: path.join(SRC, "index.html"),
    }),
  ],
};

module.exports.config = config;
