var fs = require('fs')

// 使用的所有文件操作的API都是异步的
// 文件操作中的相对路径可以省略 ./

fs.readFile('public/main.js', function (err, data) {
    if (err) {
        return console.log('读取文件失败')
    }
    console.log(data.toString());
})

// 模块加载中，相对路径中的 ./ 不能省略
require('./static/lyf.png')