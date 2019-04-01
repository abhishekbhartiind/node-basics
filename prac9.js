var fs= require('fs');
// fs.unlink('writeMee.txt');

// fs.rmdirSync('stuff');
// fs.mkdirSync('stuff');

/*
fs.mkdir('stuff',function(){
  fs.readFile('readME.txt','utf8',function(err,data){
    fs.writeFile('./stuff/writeMee.txt',data);
  });
});
*/

fs.unlink('./stuff/writeMee.txt',function(){
  fs.rmdir('stuff');
});
