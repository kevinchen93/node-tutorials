var fs = require('fs')
s = fs.readFileSync(process.argv[2]).toString()
console.log(s.split("\n").length - 1)
