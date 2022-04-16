// 过期
// let buffer = new Buffer(20)
// console.log(buffer);

// 1、三种创建方式
// Buffer.alloc()
let buf1 = Buffer.alloc(10)
console.log(buf1)   // <Buffer 00 00 00 00 00 00 00 00 00 00>

let buf2 = Buffer.alloc(10,1)
console.log(buf2)   // <Buffer 01 01 01 01 01 01 01 01 01 01>

// Buffer.allocUnsafe 会存在脏数据
let buf3 = Buffer.allocUnsafe(10)
console.log(buf3);  // <Buffer 48 0d aa 26 13 02 00 00 00 00>

// Buffer.from
let arr = [1,2,3,10,20,30]
let buf4 = Buffer.from(arr)
console.log(buf4)   // <Buffer 01 02 03 0a 14 1e>

let buf5 = Buffer.from('amadeus')
console.log(buf5);  // <Buffer 61 6d 61 64 65 75 73>
console.log(buf5.toString());   // amadeus

// 2、常用方法
// fill() 填充
buf1.fill(6,3)
console.log(buf1)   // <Buffer 00 00 00 00 06 06 06 06 06 06>

// write() 写入
buf2.write("我",0,3,'utf8')
buf2.write("是",3,3,'utf8')
console.log(buf2);  // <Buffer e6 88 91 e6 98 af 01 01 01 01>
console.log(buf2.toString());   // 我是

// Buffer.isBuffer() 判断是否是二进制流
console.log(Buffer.isBuffer(buf1)) // true
console.log(Buffer.isBuffer([])) // false

// length 长度
console.log(buf1.length) // 10