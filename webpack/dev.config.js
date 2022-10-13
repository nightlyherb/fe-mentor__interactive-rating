const common = require("./common.js");
const merge = require("./merge-config.js");

const devConfig = {
  mode: "development",

  module: {
    rules: [],
  },

  devServer: {
    static: {
      directory: common.BUILD,
    },
  },
};

const config = merge(common.config, devConfig);
module.exports = config;
