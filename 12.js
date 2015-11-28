var fs = require('fs');
var http = require('http');
var map = require('through2-map');

var filename = process.argv[3];

server = http.createServer(function(req, res) {
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  }
)).pipe(res);
});
server.listen(process.argv[2]);
