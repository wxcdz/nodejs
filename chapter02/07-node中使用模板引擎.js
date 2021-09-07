// 安装 art-template
// npm install art-template
// 该命令


//引入
var template = require('art-template');
var ret = template.render('hello {{name}}',{name:'Tom'});
console.log(ret);