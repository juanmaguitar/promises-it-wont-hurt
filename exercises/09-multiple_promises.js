// MY SOLUTION
var q = require('q');
var defer1 = q.defer();
var defer2 = q.defer();

function all(promise1, promise2) {
	var defer = q.defer();
	var counter = 0,
		result = [];

	promise1.then(function(value1) {
		counter++;
		result.push(value1);
		if (counter == 2) {
			defer.resolve(result);
		}
	}).catch(function() {
		defer.reject();
	});

	promise2.then(function(value2) {
		counter++;
		result.push(value2);
		if (counter == 2) {
			defer.resolve(result);
		}
	}).catch(function() {
		defer.reject();
	});

	return defer.promise;
}

all(defer1.promise, defer2.promise)
	.then(console.log)

setTimeout(function() {
	defer1.resolve("PROMISES");
	defer2.resolve("FTW");
}, 200);

// OFFICIAL SOLUTION
/*
var q = require('q'),
	def1 = q.defer(),
	def2 = q.defer();

function all(prom1, prom2) {
	var groupDef = q.defer(),
		counter = 0,
		val1, val2;

	prom1
		.then(function(result) {
			val1 = result;
			++counter;
			if (counter >= 2) groupDef.resolve([val1, val2]);
		})
		.then(null, groupDef.reject)
		.done();

	prom2
		.then(function(result) {
			val2 = result;
			++counter;
			if (counter >= 2) groupDef.resolve([val1, val2]);
		})
		.then(null, groupDef.reject)
		.done();

	return groupDef.promise;
}

all(def1.promise, def2.promise)
	.then(console.log)
	.done();

setTimeout(function() {
	def1.resolve("PROMISES");
	def2.resolve("FTW");
}, 200);
^*/