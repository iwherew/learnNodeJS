// 引入http 模块
let http = require('http')

// 创建一个web服务器
// let server = http.createServer((req, res)=>{
//     res.end('Hello World')
// })

// 监听
// server.listen(8080, 'localhost', ()=>{
//     console.log('8080端口上的Node服务器已经启动')
// })

// 链式调用
http.createServer((req, res)=>{
    res.end('Hello World!!!')
}).listen(8080, 'localhost',()=>{
    console.log('8080端口上的Node服务器已经启动')
})