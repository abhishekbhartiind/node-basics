//Normal function
function sayHi(){
  console.log("Hi");
}
sayHi();

//function expression
var sayBye= function(){
  console.log('bye');
}
sayBye();

//------------
function callFunction(fun){
  fun();
}
var sayGood= function(){
  console.log('good work');
}
callFunction(sayGood);
