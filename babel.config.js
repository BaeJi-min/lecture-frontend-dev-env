
module.exports = {
  // plugins: [
  //   "@babel/plugin-transform-block-scoping",
  //   "@babel/plugin-transform-arrow-functions",
  //   "@babel/plugin-transform-strict-mode"
  // ]
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "79", //크롬79까지 지원하는 코드를 만든다
          ie: "11", // ie 11까지 지원하는 코드를 만든다
        },
        useBuiltIns: "usage",
        corejs: {
          //폴리필 버전지정
          version: 2,
        },
      },
    ],
  ],
}