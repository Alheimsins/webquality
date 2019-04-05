const axios = require('axios')
const sleep = require('then-sleep')
const qs = require('querystring')
const apiUrl = 'https://http-observatory.security.mozilla.org/api/v1'
const calculateScore = require('./calculate-observatory-score')

module.exports = site => {
  return new Promise(async (resolve, reject) => {
    const siteUrl = new URL(site)
    const observatoryUrl = `${apiUrl}/analyze?host=${siteUrl.host}`
    const options = {
      hidden: true,
      rescan: true
    }
    await axios.post(observatoryUrl, qs.stringify(options))
    console.log(`check-observatory - ${site} - got data`)

    const scan = async () => {
      await sleep(2500)
      const { data } = await axios.get(observatoryUrl)
      if (data.state === 'FINISHED') {
        console.log(`check-observatory - ${site} - finished`)
        return resolve([
          {
            title: 'Security',
            name: 'observatory',
            score: calculateScore(data.grade),
            grade: data.grade
          }
        ])
      } else {
        console.log(`check-observatory - ${site} - not finished`)
        console.log(data)
        await scan()
      }
    }

    await scan()
  })
}
