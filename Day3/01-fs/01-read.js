// 同步读取 fs.readFileSync(path)

// 1、引入文件系统模块
let fs = require('fs')

// 2、同步读取 fs.readFileSync(path)
// let fd = fs.readFileSync(__dirname + '/resource/a.txt')

// console.log(fd.toString());
// console.log("后续操作")

// 3、异步读取
fs.readFile(__dirname + '/resource/a.txt', (err, data)=>{
    if(!err){
        console.log('data',data.toString())
    }else{
        console.log('err',err)
    }
})

console.log("后续操作")