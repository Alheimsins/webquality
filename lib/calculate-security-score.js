const convert = {
  'a+': 100,
  a: 95,
  'a-': 90,
  'b+': 85,
  b: 80,
  'b-': 75,
  'c+': 70,
  c: 65,
  'c-': 60,
  'd+': 55,
  d: 50,
  'd-': 45,
  'e+': 40,
  e: 35,
  'e-': 30,
  'f+': 25,
  f: 0
}

module.exports = grade => convert[grade.toLowerCase()]
