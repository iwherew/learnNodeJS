let http = require('http')

let server = http.createServer((req, res)=>{
    res.end('Hello World')
})

server.listen(8080, 'localhost', ()=>{
    console.log('8080端口上的Node服务器已经启动')
    // 5秒后关闭服务器
    setTimeout(()=>{
        server.close()
    },5000)
})

// 监听服务器关闭
server.on('close', ()=>{
    console.log("服务器已关闭")
})