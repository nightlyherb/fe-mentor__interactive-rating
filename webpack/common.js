const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ROOT = path.resolve(__dirname, "..");
module.exports.ROOT = ROOT;

const BUILD_DIRECTORY = path.join(ROOT, "build");
module.exports.BUILD_DIRECTORY = BUILD_DIRECTORY;

const config = {
  entry: path.join(ROOT, "src", "index.js"),
  output: {
    path: BUILD_DIRECTORY,
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({ template: "./src/public/index.html" })],
};

module.exports.config = config;
