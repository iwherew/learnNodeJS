let fs = require('fs')

// 1、打开文件
let fd = fs.openSync(__dirname + '/resource/b.txt','w')

// 2、同步写入内容
fs.writeFileSync(fd,'write something')

// 3、保存并退出
fs.closeSync(fd)

// 4、后续操作
console.log('后续操作')