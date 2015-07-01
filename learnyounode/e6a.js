var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, callback) {
    ext = '.' + ext
    fs.readdir(dir, function (err, data) {
	if (err)
	    return callback(err)
	extList = []
	for (i = 0; i < data.length; i++) {
	    if (path.extname(data[i]) == ext) extList.push(data[i])
	}
	callback(null, extList)
    })
    
}
