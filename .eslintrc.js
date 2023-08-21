
module.exports = {
  // rules: {
  //   "no-unexpected-multiline": "error",
  //   "no-extra-semi": "error",
  // }
  plugins: [
    "prettier"
  ],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  env: {
    browser: true,
    node: true,
  },
}