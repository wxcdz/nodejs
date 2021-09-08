require('./a');

// 优先从缓存加载
// 由于 在 a 中已经加载过 b.js 不会重复加载

var b = require('./b');
b.print();