const axios = require('axios')
const lighthouseUrl = 'https://lighthouse-dot-webdotdevsite.appspot.com/lh/newaudit'
const updateScore = require('./update-lighthouse-score')

module.exports = async url => {
  const payload = {
    url: url,
    replace: true,
    save: false
  }
  console.log(`check-lighthouse - ${url} - start`)
  try {
    const { data } = await axios.post(lighthouseUrl, payload)
    console.log(`check-lighthouse - ${url} - finished`)
    return updateScore(data.lhrSlim)
  } catch (error) {
    console.error(`check-lighthouse - ${url} - ${error}`)
    throw error
  }
}
