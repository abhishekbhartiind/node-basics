var http= require('http');
var fs= require('fs');

var readStream = fs.createReadStream(__dirname+'/textRead.txt','utf8');
readStream.on('data',function(chunk){
  console.log('New Chunk is received');
  console.log(chunk);
});

var writeStream = fs.createWriteStream(__dirname+'/tWrit.txt');
readStream.pipe(writeStream);
