const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require("path");

module.exports = {
  publicPath: '/city_literacy/v0',

  outputDir: path.resolve(__dirname, "../v1_1/"),
  assetsDir: "../v1_1/"
}