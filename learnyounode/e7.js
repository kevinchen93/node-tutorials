var http = require('http')

http.get(process.argv[2], function(responseStream) {
    responseStream.on("data", function(data) {
	console.log(data.toString())
    })
})
