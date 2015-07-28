// MY SOLUTION
var q = require('q');
var HTTP = require("q-io/http");

HTTP.read({
	url: "http://localhost:1337/example.json"
	})
	.then(JSON.parse)
	.then(console.log)
	.catch(function(err) {
		console.log("algo pasó!");
		console.log(err);
	})


// OFFICIAL SOLUTION
/*
var qhttp = require('q-io/http');

qhttp.read("http://localhost:1337")
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done()
*/