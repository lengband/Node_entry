/* 
setImmediate
nextTick 快于 setTimout和setInterval 快于 setImmediate
nextTick将其事件放在当前队列的最后一个
setImmediate将其事件放在下一个队列的队首
setTimeout和setInterval介于两者之间
但是process.nextTick里面嵌套process.nextTick是很不好的事情
所以一般尽量用setImmediate代替nextTick, setImmediate也是后来node出现的,用于优化
*/

setImmediate(() => {
    console.log('setImmediate')
    setImmediate(() => {
        console.log('setImmediate')
    })
})
setTimeout(() => {
    console.log('setTimeout')
    setTimeout(() => {
        console.log('setTimeout')
    }, 0)
}, 0)
process.nextTick(() => {
    console.log('nextTick')
    process.nextTick(() => {
        console.log('nextTick')
        process.nextTick(() => {
            console.log('nextTick')
            process.nextTick(() => {
                console.log('nextTick')
            })
        })
    })
})
console.log(1)     
 
// 顺序 1 nextTick nextTick nextTick nextTick setTimeout setImmediate(在setTimeout的4ms之后执行 ) setImmediate setTimeout