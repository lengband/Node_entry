module.exports.test = 'b'

const modA = require('./05_A')

console.log('modB:', modA.test)
module.exports.test = 'bb'