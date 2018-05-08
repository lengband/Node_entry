const fs = require('fs')

const result = fs.readFile('./06_fs.js', (err, data) => {
    console.log(err)
    console.log(data.toString())
})

console.log(result)
