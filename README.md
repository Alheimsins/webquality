# webquality

Measure quality of a page using Lighthouse and Observatory

## Usage

```JavaScript
(async () => {
  const wq = require('@alheimsins/webquality')
  const results = await wq('https://www.alheimsins.net')
  console.log(results)
})()
```

# License

[MIT](LICENSE)