let http = require('http')
let fs = require('fs')

let server = http.createServer((request, response) => {
    let out = fs.createWriteStream('request.log',)
    out.write('(1) method:' + request.method + '\n')
    out.write('(2) url:' + request.url + '\n')
    out.write('(3) headers:' + JSON.stringify(request.headers) + '\n')
    out.write('(4) httpVersion:' + request.httpVersion + '\n')
})

server.listen(8080,'localhost')