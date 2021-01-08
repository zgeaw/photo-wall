const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  runtimeCompiler: true,
  publicPath: "./",
  devServer: {
    port: 8081,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // 以cim6d开头的 都会被这个匹配到
      "/photoBase": {
        target: "d:/gitHub/photo",
        changeOrigin: true
      }
    }
  },
  chainWebpack(config) {}
};
