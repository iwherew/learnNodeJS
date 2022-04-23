// 1、引入
const express = require('express')

// 2、创建web服务器
const app = express()

// 根据路由（路径）处理get和post请求
app.get('/',(req, res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write('<h2>hello world</h2>')
    res.end()
})

app.get('/hello',(req, res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write('<h2>你好</h2>')
    res.end()
})

// 3、开启监听
app.listen(8080, ()=>{
    console.log('服务器已经启动')
})