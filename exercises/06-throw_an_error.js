// MY SOLUTION
var q = require('q');
var defer = q.defer();

var parsePromised = function(text) {
	var parsedText;
	try {
		parsedText = JSON.parse(text);
	} catch (e) {
		throw e;
	}
	return parsedText;
}

var handleError = function(error) {
	console.log(error);
}

defer.promise
	.then(parsePromised)
	.then(console.log)
	.then(null, handleError)

defer.resolve(process.argv[2]);

// OFFICIAL SOLUTION
/*
var q = require('q');

function parsePromised(json) {
	var def = q.defer(),
		result;

	try {
		result = JSON.parse(json);
	} catch (e) {
		def.reject(e);
	}

	def.resolve(result);
	return def.promise;
};

parsePromised(process.argv[2])
	.then(null, console.log)
	*/