const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')

http.createServer((req, res) =>{
    // 获取url路径
    let pathUrl = url.parse(req.url);
    let pathName = pathUrl.pathname

    // 处理没后缀
    if(pathName.lastIndexOf('.') === -1){
        pathName += '/index.html'
    }

    // 获取后缀
    let extName = path.extname(fileUrl)

    // 处理有后缀的
    let fileUrl = path.join(__dirname,pathName)

    // 读取文件
    fs.readFile(fileUrl, (err, data) => {
        if(err){
            res.writeHead(404,{'content-type':'text/html;charset=utf-8'})
            res.end('<h1>当前页面不存在</h1>')
        }else{
            getContextType(extName, (contentType)=>{
                res.writeHead(404,{'content-type':contentType})
                res.end(data)
            });
        }
    })
}).listen(8080,'localhost')

let getContextType = (extName, callback) => {
    // 读取文件
    fs.readFile(path.join(__dirname,'mime.json'), (err, data) => {
        if(err) throw err
        let mimeJson = JSON.parse(data)
        let contentType = mimeJson[extName] || 'text/plain'
        callback && callback(contentType)
    })
}