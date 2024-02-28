//算法练习统计

const fs = require('fs')
const path = require('path')


const dir = path.resolve(__dirname,'javascript-algorithms/leetcode/editor/cn')

let files = fs.readdirSync(dir)
console.log(files)

// let len = files.filter(f=>/^\d+\..+\.js$/.test(f)).length
let len = files.filter(f=>/^\[\d+\]..+\.js$/.test(f)).length
console.log('一共刷了'+ len +'题', '加油啦！！！')
