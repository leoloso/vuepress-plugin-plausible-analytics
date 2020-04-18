const { path } = require('@vuepress/shared-utils')

module.exports = () => ({
  name: "plausible-analytics",
  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
})
