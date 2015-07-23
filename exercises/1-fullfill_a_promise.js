// MY SOLUTION
var q = require('q');
var defer = q.defer();

var my_promise = function() {
	setTimeout(function() {
		defer.resolve("RESOLVED!");
	}, 300);
	return defer.promise;
}

my_promise().then(function(message) {
	console.log(message);
})

// OFFICIAL SOLUTION

/*
var q = require('q');
var def = q.defer();

def.promise.then(console.log);
setTimeout(def.resolve, 300, "RESOLVED!");
*/