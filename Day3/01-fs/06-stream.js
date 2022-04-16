let fs = require('fs')

// 1、创建读写流
let rs = fs.createReadStream(__dirname+'/resource/01.jpg')
let ws = fs.createWriteStream(__dirname+'/resource/03.jpg')

// 2、监听流的打开
rs.once('open', ()=>{
    console.log('写入流已经打开')
})
ws.once('open', ()=>{
    console.log('读入流已经打开')
})

// 3、监听data
rs.on('data', (data)=>{
    console.log(data)
    ws.write(data)
})

// 4、监听流的关闭
rs.once('end',()=>{
    console.log('写入完成')
})
rs.once('close',()=>{
    console.log('写入流已经关闭')
})

