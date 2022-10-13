const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const BUILD_DIRECTORY = path.join(__dirname, "build");

module.exports = {
  mode: "development",

  entry: "./src/index.js", // The default
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

  devServer: {
    static: {
      directory: BUILD_DIRECTORY,
    },
  },
};
