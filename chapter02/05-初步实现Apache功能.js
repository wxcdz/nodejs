
const fs = require('fs')
var http = require('http')


// 1. 创建 Server
var server = http.createServer()

var wwwDir = './app/www/'

// 2. 监听Server的请求事件
// 请求
// 处理
// 响应
// 一个请求对应一个响应，如果一个请求的过程中，已经结束响应了，则补鞥呢重复发送响应
server.on('request', function (req, res) {
    url = req.url
    if (url === '/') {
        fs.readFile(wwwDir + 'index.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found.')
            } 
            res.end(data)
        })
    } else if (url === '/a')  {
        fs.readFile(wwwDir + 'a.txt', function (err, data) {
            if (err) {
                return res.end('404 Not Found.')
            } 
            res.end(data)
        })
    } else if (url === '/app/login.html')  {
        fs.readFile(wwwDir + 'login.html', function (err, data) {
            if (err) {
                return res.end('404 Not Found.')
            } 
            res.end(data)
        })
    } else if (url === '/img')  {
        fs.readFile(wwwDir + 'lyf.png', function (err, data) {
            if (err) {
                return res.end('404 Not Found.')
            } 
            res.end(data)
        })
    } 
})



// 3.绑定端口号，启动服务
server.listen(3000, function () {
    console.log('running ...');
})