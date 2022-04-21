const http = require('http')
const queryString = require('querystring')
const util = require('util')

http.createServer((req, res)=>{
    let postData
    // post请求，做事件监听
    req.on('data',(data)=>{
        postData += data
    })

    // 监听数据接收完毕
    req.on('end',()=>{
        postData = queryString.parse(postData)
        console.log(util.inspect(postData))
        res.end("数据接收成功")
    })
}).listen(8080,'localhost',()=>{
    console.log('服务器已经启动')
})