var fs = require('fs');

var lines = (fs.readFileSync(process.argv[2])).toString().split('\n').length;
console.log(lines - 1);
