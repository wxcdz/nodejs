// 用来获取机器信息
var os = require('os')

// 用来操作路径的
var path = require('path')

// 获取当前机器cpu信息
console.log(os.cpus());

// memory 内容
console.log(os.totalmem());

console.log(path.extname('c:'));
console.log('123')
