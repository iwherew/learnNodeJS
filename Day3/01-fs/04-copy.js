let fs = require('fs')

let copy = (src, target, callback) => {
    fs.readFile(src, (readErr, data) => {
        if(readErr) throw readErr
        fs.writeFile(target,data,(writeError)=>{
            if(writeError) return writeError
            callback && callback(writeError, data)
        })
    })
}

copy(__dirname+'/resource/b.txt',__dirname+'/resource/d.txt', err =>{
    if(err) throw err
    console.log('copy success')
})