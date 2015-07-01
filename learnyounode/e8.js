var http = require('http')

http.get(process.argv[2], function(responseStream) {

    result = ""
    
    responseStream.on("data", function(data) {
	result += data.toString()
    })
    responseStream.on("end", function() {
	console.log(result.length)
	console.log(result)
    })
})
