
function f() {
  var args = process.argv.slice(2);
  args = args.reduce(function(a,b){
     return parseInt(a)+ parseInt(b);
  },0);
  return args;
}
console.log(f());
