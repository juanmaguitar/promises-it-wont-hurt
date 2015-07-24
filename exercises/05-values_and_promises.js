// MY SOLUTION
var q = require('q');
var defer = q.defer();

var attachTitle = function(text) {
	return 'DR. ' + text;
}

defer.promise
	.then(attachTitle)
	.then(console.log)

defer.resolve('MANHATTAN');

// OFFICIAL  SOLUTION
/*
 var q = require('q')
  , def = q.defer();

function attachTitle (name) {
  return "DR. " + name;
}

def.promise
.then(attachTitle)
.then(console.log);

def.resolve("MANHATTAN");
*/