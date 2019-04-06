module.exports = lines => lines.map(line => Object.assign({}, line, { score: parseInt((line.score * 100).toFixed(), 10) }))
