var fs = require('fs');
var path = require('path');

 function myModule(dir, filterStr, callback) {
     fs.readdir(dir, function (err, list) {
       if (err) {
         return callback(err);
       }

       var result = list.filter(function (file) {
         return path.extname(file) === '.' + filterStr;
       });
       callback(null, result);
     });
   }


module.exports = myModule;
