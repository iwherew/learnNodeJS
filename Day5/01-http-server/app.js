const http = require('http')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')

http.createServer((req,res) => [
    readDataJson((data)=>{
        
    })
]).listen(8080,'localhost')

let readDataJson = (callback) =>{
    fs.readFile(path.join(__dirname,'model/data.json'),(err, data)=>{
        if(err) throw err
        let jsonData = JSON.parse(data)
        callback && callback(jsonData)
    })
}