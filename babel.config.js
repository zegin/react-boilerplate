module.exports = {
  "presets": [
    [
      "@babel/env",
      {
        targets: {
          chrome: "69",
        },
        useBuiltIns: "usage",
      },
    ],
  ],
}