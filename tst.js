(async () => {
  process.env.debug = true
  const wq = require('./index')
  const results = await wq('https://www.example.com/')
  console.log(results)
})()
