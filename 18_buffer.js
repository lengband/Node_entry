
/*  创建buffer的第一种方式
Buffer.alloc(size[, fill[, encoding]])
 size <integer> 新建的 Buffer 期望的长度
 fill <string> | <Buffer> | <integer> 用来预填充新建的 Buffer 的值。 默认: 0
 encoding <string> 如果 fill 是字符串，则该值是它的字符编码。 默认: 'utf8'
 */
console.log(Buffer.alloc(10))
console.log(Buffer.alloc(20))

console.log(Buffer.alloc(5, 1))
console.log(Buffer.allocUnsafe(5, 1))


/* 创建buffer的第二种方式
 Buffer.from(array)
 通过一个八位字节的 array 创建一个新的 Buffer 。
*/
console.log(Buffer.from([1, 2, 3]))
/* 
 Buffer.from(buffer[,encoding])
 buffer <Buffer> 一个要拷贝数据的已存在的 Buffer 
 encoding <string> string 的字符编码。 默认: 'utf8'
*/
console.log(Buffer.from('test'))
console.log(Buffer.from('test', 'base64'))

/* 
Buffer.byteLength(string[, encoding])
string <string> | <Buffer> | <TypedArray> | <DataView> | <ArrayBuffer> 要计算长度的值
encoding <string> 如果 string 是字符串，则这是它的字符编码。 默认: 'utf8'
返回: <integer> string 包含的字节数
*/
console.log(Buffer.byteLength('test')) // 4
console.log(Buffer.byteLength('测试')) // 6  说明一个中文三个字节

/* 
类方法：Buffer.isBuffer(obj)
obj <Object>
返回: <boolean>
如果 obj 是一个 Buffer 则返回 true ，否则返回 false 。
*/
console.log(Buffer.isBuffer({})) // false
console.log(Buffer.isBuffer(Buffer.from([1, 2, 3]))) // true

/* 
Buffer.concat(list[, totalLength])
list <Array> 要合并的 Buffer 或 Uint8Array 实例的数组
totalLength <integer> 合并时 list 中 Buffer 实例的总长度
*/
const buf1 = Buffer.from('This')
const buf2 = Buffer.from('is')
const buf3 = Buffer.from('a')
const buf4 = Buffer.from('test')
const buf5 = Buffer.from('!')
const buf = Buffer.concat([buf1, buf2, buf3, buf4, buf5])
console.log(buf.toString())

// buf.length

// buf.toString() // encoding <string> 解码使用的字符编码。默认: 'utf8'

/* 
buf.fill(value[, offset[, end]][, encoding])
value <string> | <Buffer> | <integer> 用来填充 buf 的值。
offset <integer> 开始填充 buf 前要跳过的字节数。默认: 0。
end <integer> 结束填充 buf 的位置（不包含）。默认: buf.length。
encoding <string> 如果 value 是一个字符串，则这是它的字符编码。默认: 'utf8'。
返回: <Buffer> buf 的引用。
*/
const b = Buffer.allocUnsafe(50).fill('h');
console.log(b.toString());
// 输出: hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

/* 
buf.equals(otherBuffer)
otherBuffer <Buffer> 要比较的 Buffer 或 Uint8Array。
*/
const buf11 = Buffer.from('ABC');
const buf22 = Buffer.from('414243', 'hex');
const buf33 = Buffer.from('ABCD');
console.log(buf11.equals(buf22));
// 输出: true
console.log(buf11.equals(buf33));
// 输出: false

/* buf.indexOf() */
const buff = Buffer.from('this is a buffer');
console.log(buff.indexOf('this'));
 // 输出: 0
console.log(buff.indexOf('is'));
// 输出: 2
console.log(buff.indexOf(Buffer.from('a buffer')));
// 输出: 8
console.log(buff.indexOf(97));
/* 输出: 8
(97 是 'a' 的十进制 ASCII 值) */
console.log(buff.indexOf(Buffer.from('a buffer example')));
// 输出: -1

// buf.copy()
/*
buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
target <Buffer> | <Uint8Array> 要拷贝进的 Buffer 或 Uint8Array。
targetStart <integer> target 中开始拷贝进的偏移量。 默认: 0
sourceStart <integer> buf 中开始拷贝的偏移量。 当 targetStart 为 undefined 时忽略。 默认: 0
sourceEnd <integer> buf 中结束拷贝的偏移量（不包含）。 当 sourceStart 为 undefined 时忽略。 默认: buf.length
返回: <integer> 被拷贝的字节数。
*/

let b1 = Buffer.from('a')
console.log(b1)
console.log(b1.length)



// e.g大全
// 创建一个长度为 10、且用 0 填充的 Buffer。
const buff1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buff2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buff3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buff4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buff5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buff6 = Buffer.from('tést', 'latin1');