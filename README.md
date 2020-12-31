# vuepress-plugin-plausible-analytics

VuePress plugin to add analytics from plausible.io

## Install

Run command:

```bash
yarn add -D vuepress-plugin-plausible-analytics
```

## Usage

Add in file `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    ["plausible-analytics", {
      domain: 'yourdomain.com'
    }]
  ]
}
```

## Configuration

Pass `apiHost` to serve plausible.js with a custom domain:

```js
module.exports = {
  plugins: [
    ["plausible-analytics", {
      domain: 'yourdomain.com',
      apiHost: 'stats.yourdomain.com'
    }]
  ]
}
```

## License

MIT
