const { path } = require('@vuepress/shared-utils')

module.exports = (options) => ({
  name: "plausible-analytics",
  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js'),
  define: {
    PLAUSIBLE_DOMAIN: options.apiHost || 'plausible.io',
    DOMAIN: options.domain,
  },
})
