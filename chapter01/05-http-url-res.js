var http = require('http')

// 1. 创建 Server
var server = http.createServer()

// 2. 监听 request 请求事件，设置请求处理函数
server.on('request', function(req, res){
    console.log('收到请求路径' + req.url);

    res.end('hello nodejs')
}) 

// 3. 绑定端口号，自动服务
server.listen(8001, function(){
    console.log('服务器启动成功');
})