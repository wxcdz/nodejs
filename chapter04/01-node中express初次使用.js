// 安装 npm i -S express
// 引包

var express = require('express')

// 创建服务器应用程序
var app = express()

// 公开指定目录
app.use('/public/', express.static('./public/'))
app.use('/static/', express.static('./static/'))

// 当服务器收到 get 请求 /的时候，执行回调处理函数
app.get('/', function(req, res){
    res.send('你好 express')
})

app.listen(3000, function () {
    console.log('服务器启动')
})