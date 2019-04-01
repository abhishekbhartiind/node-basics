var c= function(arr){
  return 'There are '+ arr.length +' elements in this array.';
};
var add= function(a,b){
  return `The sum of 2 numbers are ${a+b}`;
};
var pi=3.14;
/*
module.exports.c=c;
module.exports.add=add;
module.exports.pi=pi;
*/
module.exports={
c:c,
add:add,
pi:pi
};
