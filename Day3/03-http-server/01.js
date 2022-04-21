const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require("path");

http.createServer((req, res)=>{
    // 获取url路径
    let pathUrl = url.parse(req.url);
    let pathName = pathUrl.pathname
    if(pathName === '/page1'){
        fs.readFile(path.join(__dirname,'page/post.html'),(err, data) =>{
            if(err) throw err
            res.writeHead(200,{'content-type':'text/html;charset=utf-8'})
            res.end(data)
        })
    }else if(pathName === '/css'){
        fs.readFile(path.join(__dirname,'page/index.css'),(err, data) =>{
            if(err) throw err
            res.writeHead(200,{'content-type':'text/css;charset=utf-8'})
            res.end(data)
        }) 
    }else if(pathName === '/img'){
        fs.readFile(path.join(__dirname,'page/avatar.jpg'),(err, data) =>{
            if(err) throw err
            res.writeHead(200,{'content-type':'image/jpg'})
            res.end(data)
        })
    }else{
        res.writeHead(404,{'content-type':'text/html;charset=utf-8'})
        res.end('<h1>当前页面不存在</h1>')
    }
}).listen(8080, 'localhost',()=>{

})