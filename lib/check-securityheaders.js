const axios = require('axios')
const calculateSecurityScore = require('./calculate-security-score')
const logger = require('./logger')

module.exports = async site => {
  const url = `https://securityheaders.com?q=${site}&hide=on&followRedirects=on`
  logger('info', ['check-securityheaders', site, 'start'])
  try {
    const { headers } = await axios.get(url)
    const grade = headers['x-grade']
    logger('info', ['check-securityheaders', site, 'grade', grade, 'finished'])
    return [
      {
        id: 'securityheaders',
        title: 'Security',
        score: calculateSecurityScore(grade),
        grade,
        description: 'Security Headers https://securityheaders.com is created by Scott Helme https://scotthelme.co.uk/ to drive up the usage of security based headers across the web.'
      }
    ]
  } catch (error) {
    logger('error', ['check-securityheaders', site, error])
    throw error
  }
}
