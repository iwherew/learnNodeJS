let http = require('http')

let server = http.createServer((req, res)=>{
    res.end('Hello World')
})

server.listen(8080, 'localhost', ()=>{
    console.log('8080端口上的Node服务器已经启动')
    // 5秒后关闭服务器
    setTimeout(()=>{
        server.close()
    },20000)
})

// 监听服务器关闭
server.on('close', ()=>{
    console.log("服务器已关闭")
})

// 监听服务器发生错误
server.on('error', (err)=>{
    if(err.code === 'EADDRINUSE'){
        console.log('端口被占用')
    }
    console.log(err.code)
})

// 设置超时时间
server.setTimeout(1000, ()=>{
    console.log('设置超时1秒')
})

server.on('timeout', ()=>{
    console.log('超时的操作')
})

