// MY SOLUTION
var q = require('q');
var def = q.defer();

def.promise.then(null, console.log);
setTimeout(def.reject, 300, "REJECTED!");

// OFFICIAL SOLUTION
/*
var q = require('q');
var def = q.defer();

function printError (err) {
  console.log(err.message);
}

def.promise.then(null, printError);
setTimeout(def.reject, 300, new Error("REJECTED!"));
*/