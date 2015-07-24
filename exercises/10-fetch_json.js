// MY SOLUTION
var q = require('q');
var q_io = require('q-io');
var http = require('http');

q_io.http.read({
		url: "http://localhost:1337"
	})
	.then(JSON.parse)
	.then(console.log)


http.createServer(function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify({
		msgId: msg.fileName
	}));
}).listen(1337, '127.0.0.1 ');

console.log('Server running at http://127.0.0.1:1337/');