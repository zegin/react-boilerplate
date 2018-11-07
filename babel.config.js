const presets = [
    [
      "@babel/env",
      {
        targets: {
          chrome: "69",
        },
        useBuiltIns: "usage",
      },
    ],
  ];
  
  module.exports = { presets };