// 1、引入
const express = require('express')
const fs = require('fs')
const path = require('path')
// const bodyParser = require('body-parser')

// 2、创建web服务器
const app = express()

// 设置用户表单提交数据接收的中间件，所有提交的信息都会保留在req.body中
// 已废弃
// app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

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

app.post('/submit',(req, res)=>{
    console.log(req.body)
    res.end()
})

// 3、开启监听
app.listen(8080, ()=>{
    console.log('服务器已经启动')
})