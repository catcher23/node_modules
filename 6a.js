var myModule = require('./6b');
var fileName = process.argv[2];
var ext = process.argv[3];

myModule(fileName, ext, function(err, data){
  data.forEach(function(el){
    console.log(el);
  });
});
