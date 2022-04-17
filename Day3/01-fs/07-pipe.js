let fs = require('fs')

// 1、创建读写流
let rs = fs.createReadStream(__dirname+'/resource/01.jpg')
let ws = fs.createWriteStream(__dirname+'/resource/04.jpg')

// 2、创建管道
rs.pipe(ws)
