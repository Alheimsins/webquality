/*
 This module is not used at the moment.
 If is to be included later 'then-sleep' must be included as a dependency
*/

const axios = require('axios')
const sleep = require('then-sleep')
const qs = require('querystring')
const apiUrl = 'https://http-observatory.security.mozilla.org/api/v1'
const calculateScore = require('./calculate-observatory-score')
const logger = require('./logger')

module.exports = async site => {
  const siteUrl = new URL(site)
  const host = siteUrl.host
  const observatoryUrl = `${apiUrl}/analyze?host=${host}`
  const options = {
    hidden: true,
    rescan: true
  }
  logger('info', ['check-observatory', host, 'initialize'])
  await axios.post(observatoryUrl, qs.stringify(options))
  logger('info', ['check-observatory', host, 'got data'])

  const scan = async () => {
    await sleep(2500)
    const { data } = await axios.get(observatoryUrl)
    if (data.state === 'FINISHED') {
      logger('info', ['check-observatory', host, 'finished'])
      return [
        {
          id: 'observatory',
          title: 'Security',
          score: calculateScore(data.grade),
          grade: data.grade,
          description: 'The Mozilla Observatory teaches you how to configure your sites safely and securely. https://observatory.mozilla.org'
        }
      ]
    } else if (data.error === 'site down') {
      logger('error', ['check-observatory', host, data.error])
      throw new Error(data.error)
    } else {
      logger('info', ['check-observatory', host, 'not finished'])
      logger('info', ['check-observatory', host, JSON.stringify(data, null, 2)])
      await scan()
    }
  }
  await scan()
}
