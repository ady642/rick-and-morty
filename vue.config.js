const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      definitions[0]['__VUE_I18N_FULL_INSTALL__'] = true;
      definitions[0]['__VUE_I18N_LEGACY_API__'] = true;
      definitions[0]['__INTLIFY_PROD_DEVTOOLS__'] = false;
      return definitions;
    });
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/index.scss";`
      }
    }
  }
})
