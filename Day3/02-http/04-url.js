// 方式1
const url = require('url')
const requestUrl = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'
const myUrl = url.parse(requestUrl)
console.log(myUrl)

// 方式2
const urlObj = new URL(requestUrl)
console.log(urlObj)