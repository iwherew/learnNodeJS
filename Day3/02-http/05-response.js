const http = require('http')

http.createServer((request, response)=>{
    console.log(response.headersSent ? '响应头已经发送' : '响应头未发送')
    // 设置隐式响应头
    response.setHeader('Content-Type','text/html;charset=utf-8')
    // code码
    response.writeHead(200,'ok')
    response.write('<h1>这是一些内容</h1>')
    // 本次响应结束
    response.end('<h1>这是响应体</h1>')
}).listen(8080, 'localhost',()=>{
    console.log('服务器已经启动')
})