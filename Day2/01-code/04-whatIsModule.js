console.log('exports',exports)
console.log('require',require)

console.log('arguments',arguments)
console.log(arguments.callee);
console.log(arguments.callee + '');

/*
[Function (anonymous)]
function (exports, require, module, __filename, __dirname) {
    exports = module.exports = {};

    // 自己写的代码

    return module.exports;
}

* */