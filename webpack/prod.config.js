const { config: commonConfig } = require("./common.js");
const merge = require("./merge-config.js");

const prodConfig = {
  mode: "production",

  module: {
    rules: [],
  },
};

module.exports = merge(commonConfig, prodConfig);
