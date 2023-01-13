const { defineConfig } = require('@vue/cli-service')
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const {NaiveUiResolver} = require("unplugin-vue-components/resolvers");
module.exports = defineConfig({
    publicPath:'/',
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
        AutoImport({
          resolvers: [NaiveUiResolver()]
        }),
        Components({
            resolvers: [NaiveUiResolver()],
        }),

    ]
  }

})
