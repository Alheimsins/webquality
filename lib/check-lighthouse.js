const axios = require('axios')
const lighthouseUrl = 'https://lighthouse-dot-webdotdevsite.appspot.com/lh/newaudit'
const updateScore = require('./update-lighthouse-score')
const logger = require('./logger')

module.exports = async url => {
  const payload = {
    url: url,
    replace: true,
    save: false
  }
  logger('info', ['check-lighthouse', url, 'start'])
  try {
    const { data } = await axios.post(lighthouseUrl, payload)
    logger('info', ['check-lighthouse', url, 'finished'])
    return updateScore(data.lhrSlim)
  } catch (error) {
    logger('error', ['check-lighthouse', url, error])
    throw error
  }
}
