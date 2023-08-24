module.exports = {
  // rules: {
  //   "no-unexpected-multiline": "error",
  //   "no-extra-semi": "error",
  // }
  root: true,
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018
  },
  plugins: ["prettier"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  env: {
    browser: true,
    node: true,
    es6: true
  }
};
