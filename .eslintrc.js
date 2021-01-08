module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "@vue/prettier"],
  rules: {
    "no-unused-vars": 0,
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off",
    "vue/attribute-hyphenation": "off",
    eqeqeq: "error",
    "vue/no-v-html": 0,
    "vue/custom-event-name-casing": 0,
    "vue/no-mutating-props": 0
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
