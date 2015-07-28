// OFFICIAL SOLUTION
var qHTTP = require('q-io/http'),
	_ = require('lodash'),
	cachePath = "http://localhost:7000/",
	dbPath = "http://localhost:7001/";

var buildDbPath = _.bind(String.prototype.concat, dbPath);

qHTTP.read(cachePath)
	.then(_.compose(qHTTP.read, buildDbPath))
	.then(_.compose(console.log, JSON.parse))
	.then(null, console.error)
	.done();

/*
MORE INFO:

https://lodash.com/docs#flowRight
https://lodash.com/docs#bind
*/