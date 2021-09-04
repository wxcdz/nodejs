var http = require('http')

var server = http.createServer()

server.on('request', function (req, res) {
    // 服务端默认发送的数据，其实是 utf8 编码的内容
    // 浏览器在不知道服务器响应内容的编码情况下会按照当前操作系统的默认编码区解析
    // 中文操作系统默认是 gbk
    // 解决方法就是正确的告诉浏览器发送的内容是什么编码
    // 在 http 协议中， Content-Type 就是用来告知对方我给你发送的数据内容是什么类型
    res.setHeader('Content-type', 'text/html; charset=utf-8')
    res.end('hello 世界')
})

server.listen(3000, function () {
    console.log('server is running...');
})