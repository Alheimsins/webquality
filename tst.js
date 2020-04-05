(async () => {
  process.env.debug = true
  const wq = require('./index')
  const results = await wq('https://latest.b5.rubynor.xyz/')
  console.log(results)
})()
