let fs = require('fs')

// 1、读取图片
fs.readFile(__dirname+'/resource/01.jpg', (err, data) => {
    if(err) throw err
    fs.writeFile(__dirname+'/resource/02.jpg',data,err =>{
        if(err) throw err
        console.log('写入成功')
    })
})