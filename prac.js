console.log("Hi There!");
// setTimeout(function(){
//   console.log("wait 3 seconds");
// });

var time=0;
setInterval(function(){
  time+=10;
  console.log(time+ " seconds is passed");
},10000);

console.log(__dirname);
console.log(__filename);
