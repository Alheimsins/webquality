const { name, version } = require('../package.json')

module.exports = (level, message) => {
  if (process.env.debug) {
    const data = Array.isArray(message) ? message : [message]
    const log = level === 'error' ? console.error : console.log
    log(`${new Date().toUTCString()} - ${level.toUpperCase()} - ${name} - ${version}: ${data.join(' - ')}`)
  }
}
