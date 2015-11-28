var http = require('http');

var url = process.argv[2];

http.get(url, function(request) {
  var response = '';
  request.setEncoding('utf8');
  request.on('data', function(data) {
    response += data;
  });
  request.on('end', function(){
    console.log(response.length);
    console.log(response);
  });
});
