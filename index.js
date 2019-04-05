const checkLighthouse = require('./lib/check-lighthouse')
const checkObservatory = require('./lib/check-observatory')

module.exports = async url => {
  const [lighthouse, observatory] = await Promise.all([checkLighthouse(url), checkObservatory(url)])
  return [
    ...lighthouse,
    ...observatory
  ]
}