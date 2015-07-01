var e6a = require('./e6a.js')


e6a(process.argv[2], process.argv[3], function (err, data) {
    if (err)
	console.error("oops", err)
    else {
	for (i = 0; i < data.length; i++) {
	    data.forEach(function(file) {
		console.log(file)	
	    })
	}
    }
})
