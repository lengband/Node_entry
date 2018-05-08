module.exports.test = 'A'

const modB = require('./05_B')

console.log('modA:', modB.test)
module.exports.test = 'aa'