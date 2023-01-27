const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require("path");

module.exports = {
  publicPath: '/city_literacy/2023_6_1',  // TODO

  outputDir: path.resolve(__dirname, "../2023_6_1/"),
  assetsDir: "../2023_6_1/"
}