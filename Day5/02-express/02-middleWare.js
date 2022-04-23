// 1、引入
const express = require('express')
const fs = require('fs')
const path = require('path')

// 2、创建web服务器
const app = express()

// 4、写日志
app.use((req, res, next) => {
    const log = `
        ---------------------------------------------
        （1）请求的方式：${req.method} \n
        （2）请求的路径：${req.url} \n
        （3）请求的时间：${new Date()} \n
        ---------------------------------------------
    `
    // 写入文件
    fs.appendFile(path.join(__dirname,'req.log'), log, err =>{
        if(err) throw err
        // 放行
        next()
    })
})

app.get('/',(req, res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write('<h2>hello world</h2>')
    res.end()
})

// 3、开启监听
app.listen(8080, ()=>{
    console.log('服务器已经启动')
})