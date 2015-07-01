// You will be provided with three URLs as the first three command-line arguments.

// You must collect the complete content provided to you by each of the URLs and print it to the console (stdout).

// The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

var http = require('http')

res1 = ""
res2 = ""
res3 = ""

done1 = false
done2 = false
done3 = false

function allDone() {
    return done1 && done2 && done3
}

function check() {
    if (allDone()) {
	console.log(res1)
	console.log(res2)
	console.log(res3)
    }
}

http.get(process.argv[2], function(responseStream) {
    responseStream.on("data", function(data) {
	res1 += data.toString()
    })
    responseStream.on("end", function() {
	done1 = true
	check()
    })
})

http.get(process.argv[3], function(responseStream) {
    responseStream.on("data", function(data) {
	res2 += data.toString()
    })
    responseStream.on("end", function() {
	done2 = true
	check()
    })
})

http.get(process.argv[4], function(responseStream) {
    responseStream.on("data", function(data) {
	res3 += data.toString()
    })
    responseStream.on("end", function() {
	done3 = true
	check()
    })
})


