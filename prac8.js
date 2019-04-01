var fs= require('fs');
fs.readFile('readME.txt','utf8',function(err,data){
  console.log(data);
  fs.writeFile('writeMee.txt',data);
});
