/* 
require特性
1、module被加载的时候执行，加载后缓冲
2、一旦出现某个模块被循环加载的时候，就只输出已执行的部分，还未执行的部分不会输出。
*/
const modeA = require('./05_A')
const modeB = require('./05_B')
