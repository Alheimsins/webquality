const test = require('ava')
const { dependencies, devDependencies } = require('../package.json')
const dropModules = ['husky']
const isDropped = module => !dropModules.includes(module)

test('basic check', t => {
  t.true(true, 'ava works ok')
})

if (dependencies) {
  Object.keys(dependencies)
    .filter(isDropped)
    .forEach(dependency =>
      test(`${dependency} loads ok`, t => t.truthy(require(dependency)))
    )
}

if (devDependencies) {
  Object.keys(devDependencies)
    .filter(isDropped)
    .forEach(dependency =>
      test(`${dependency} loads ok`, t => t.truthy(require(dependency)))
    )
}
