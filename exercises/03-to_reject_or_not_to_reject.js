// MY SOLUTION
var q = require('q');
var def = q.defer();

function resolve_and_reject() {
	def.resolve("I FIRED");
	def.reject("I DID NOT FIRE");
}

def.promise.then(console.log, console.log);
setTimeout(resolve_and_reject, 300, "REJECTED!");


// OFFICIAL SOLUTION
/*
var q = require('q')
	, def = q.defer();

def.promise.then(console.log, console.log);
def.resolve("I FIRED");
def.reject("I DID NOT FIRE");
*/