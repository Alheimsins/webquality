const test = require('ava')
const calculateSecurityScore = require('../lib/calculate-security-score')

test('it should return a score of 100 when the grade is A+', t => {
  const grade = 'A+'
  const score = calculateSecurityScore(grade)
  t.is(score, 100)
})

test('it should return a score of 95 when the grade is A', t => {
  const grade = 'A'
  const score = calculateSecurityScore(grade)
  t.is(score, 95)
})

test('it should return a score of 0 when the grade is F', t => {
  const grade = 'F'
  const score = calculateSecurityScore(grade)
  t.is(score, 0)
})
