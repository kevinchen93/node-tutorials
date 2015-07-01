var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, data) {

    ext = '.' + process.argv[3]
    for (i = 0; i < data.length; i++) {
	if (path.extname(data[i]) == ext) console.log(data[i])
    }
})
