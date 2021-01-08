let transformRemoveConsolePlugin = [];
if (process.env.NODE_ENV === "production") {
  transformRemoveConsolePlugin.push("transform-remove-console");
}
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset", "@vue/babel-preset-jsx"],
  plugins: transformRemoveConsolePlugin
};
