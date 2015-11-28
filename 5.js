var fs = require('fs');
var file = process.argv[2];
var ext = process.argv[3];
fs.readdir(file, function (err, data) {
  var lines = data.toString().split(',');
  lines.forEach(function(el){
    elSplit = el.split('.');
    if (elSplit[1] == ext) {
    console.log(el);
  }
  });
});

// var fs = require('fs')  
// var path = require('path')
// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })
//
