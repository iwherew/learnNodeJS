let fs = require('fs')

fs.open(__dirname+'/resource/c.txt','w',(err, fd) => {
    if(!err){
        fs.writeFile(fd, 'something in file', writeErr => {
            if(writeErr) throw err
            console.log('写入成功')
        })
    }
    fs.close(fd, closeErr => {
        if(closeErr) throw closeErr
        console.log('文件已关闭')
    })
})

console.log('后续操作')