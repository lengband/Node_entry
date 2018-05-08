/*  e.g
     node --inspect 09_.js a=1 b=2 test 
     */
/* 
argv 获得运行命令所有参数   [node所在目录，当前文件所在目录，a=1, b=2, 'test']
argv0 命令的第一个参数      node
execArgv 文件路径之前的node命令相关的参数    --inspect
execPath node的路径 最常用的是argv 一般从第三个参数开始读取
 */
 const { argv, argv0, execArgv, execPath } = process
//  console.log(argv) // [ '/usr/local/bin/node','/Users/wangpeng/learn/code/Node_entry/10_argv.js''a=1', 'b=2', 'test ]
 console.log(execPath)
 
 