const { paths, config: commonConfig } = require("./common.js");
const merge = require("./merge-config.js");

const devConfig = {
  mode: "development",

  module: {
    rules: [],
  },

  devServer: {
    static: false,
  },
};

const config = merge(commonConfig, devConfig);
module.exports = config;
