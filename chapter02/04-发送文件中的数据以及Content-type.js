// 1. 结合 fs 发送文件中的数据
// 2. Content-Type
// http://tool.oschina.net/commons
var http = require('http');
var fs = require('fs');


var server = http.createServer()

server.on('request', function (req, res) {
    url = req.url
    if (url === '/') {
        fs.readFile('./resources/index.html', function (err, data) {
            if (err) {
                res.setHeader('Content-type', 'text/plain; charset=utf-8')
                res.end('文件读取失败，请稍后重试')
            } else {
                // data 默认是二进制数据， 可以通过 .tostring 转为咱们能识别的字符串
                // res.end() 支持两种数据类型， 一种是二进制， 一种是字符串
                res.setHeader('Content-type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    } else {
        res.setHeader('Content-type', 'text/html; charset=utf-8')
        res.end('hello 世界')
    }

    

  
})

server.listen(3001, function () {
    console.log('server is running...');
})