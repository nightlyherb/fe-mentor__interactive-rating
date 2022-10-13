const common = require("./common.js");

module.exports = {
  ...common.config,

  mode: "development",

  devServer: {
    static: {
      directory: common.BUILD_DIRECTORY,
    },
  },
};
