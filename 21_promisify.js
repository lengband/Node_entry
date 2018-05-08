const fs = require('fs')
const promisify = require('util').promisify

// 通过promisify把异步变同步
const read = promisify(fs.readFile)
// read('./21_promisify.js').then(data => {
//     console.log(data.toString())
// }).catch(ex => {
//     console.log(ex)
// })

// async/await  
async function test() {
    try {
        const content = await read('./21_promisify.js')
        console.log(content.toString())
    } catch (error) {
        console.log(error)
    }
}
test()