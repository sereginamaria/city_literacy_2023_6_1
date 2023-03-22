const { defineConfig } = require('@vue/cli-service')
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: '/city_literacy/2023_6_1',  // TODO

  outputDir: path.resolve(__dirname, "../2023_6_1/"),
  assetsDir: "../2023_6_1/",

  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "../city_literacy_2023_6_1/server_request/"),
            to: path.resolve(__dirname, "../2023_6_1/server_request/"),
          },
          {
            from: path.resolve(__dirname, "../city_literacy_2023_6_1/static_img/"),
            to: path.resolve(__dirname, "../2023_6_1/img/")
          },
          {
            from: path.resolve(__dirname, "../city_literacy_2023_6_1/readme.txt"),
            to: path.resolve(__dirname, "../2023_6_1/")
          },
        ],
      }),
    ]
  },
}