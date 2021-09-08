// 如果是非路径的模块标识
var foo = require('./foo')

// 核心模块的本质也是文件
// 核心模块文件已经被编译到二进制文件中，使用名字来加载即可
fs = require('fs')
http = require('http')

console.log(foo);
