const checkLighthouse = require('./lib/check-lighthouse')
const checkSecurityheaders = require('./lib/check-securityheaders')

module.exports = async url => {
  try {
    const [lighthouse, securityheaders] = await Promise.all([checkLighthouse(url), checkSecurityheaders(url)])
    return [
      ...lighthouse,
      ...securityheaders
    ]
  } catch (error) {
    throw error
  }
}
