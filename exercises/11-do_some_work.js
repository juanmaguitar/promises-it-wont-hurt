// MY REFACTORED SOLUTION
var qHTTP = require("q-io/http"),
	cachePath = "http://localhost:7000/",
	dbPath = "http://localhost:7001/";

qHTTP.read(cachePath)
	.then(function(id) {
		return qHTTP.read(dbPath + id)
	})
	.then(JSON.parse)
	.then(console.log)
	.catch(console.error)
	.done();


// MY SOLUTION
/*var qHTTP = require("q-io/http");

qHTTP.read({
		url: "http://localhost:7000"
	})
	.then(function(id) {
		return qHTTP.read({
			url: "http://localhost:7001/" + id
		})
	})
	.then(JSON.parse)
	.then(console.log)
	.catch(function(err) {
		console.log("algo pasó!");
		console.log(err);
	})
	.done();
*/

// OFFICIAL SOLUTION
/*var qhttp = require('q-io/http');

qhttp.read("http://localhost:7000/")
	.then(function(id) {
		return qhttp.read("http://localhost:7001/" + id);
	})
	.then(function(json) {
		console.log(JSON.parse(json));
	})
	.then(null, console.error)
	.done();
*/