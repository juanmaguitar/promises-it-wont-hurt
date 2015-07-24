// MY SOLUTION
var q = require('q');

q.fcall(function() {
		JSON.parse(process.argv[2])
	})
	.then(null, console.log)

// OFFICIAL SOLUTION
/*
var q = require('q');

q.fcall(JSON.parse, process.argv[2])
	.then(null, console.log)
*/