const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  runtimeCompiler: true,
  publicPath: "/",
  devServer: {
    port: 8081,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  chainWebpack(config) {
  }
};
