const express = require('express')
const path = require('path')

const app = express()

// 中间件访问静态资源
app.use(express.static(path.join(__dirname,'public')))

app.listen(8080,()=>{
    console.log('服务器已经启动')
})