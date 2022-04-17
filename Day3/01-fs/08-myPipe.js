let fs = require('fs')

// 1、创建读写流
let rs = fs.createReadStream(__dirname+'/resource/01.jpg')
let ws = fs.createWriteStream(__dirname+'/resource/05.jpg')

rs.on('data', (data) => {
    let flag = ws.write(data)
    console.log(flag)
    // 判断 是否暂停读取
    if(!flag){
        // 暂停
        rs.pause()
    }
})

ws.on('drain', ()=>{
    // 继续读取流
    rs.resume()
})

rs.on('end', ()=>{
    ws.end()
})
