var http= require('http');
var fs= require('fs');

var server= http.createServer(function(req,res){
   //console.log("Request was made: "+ req.url);
   res.writeHead(200,{'Content-Type':'text/html'});

   var myRead= fs.createReadStream(__dirname+'/abhishek.html','utf8');
  myRead.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('Port is running on 3000.');

// var http= require('http');
// var fs= require('fs');

// var server= http.createServer(function(req,res){
//   console.log("Request was made: "+req.url);
//   res.writeHead(200,{'Content-Type':'text/plain'});

//   var myRead= fs.createReadStream(__dirname+'/textRead.txt','utf8');
//   myRead.pipe(res);

// });

// server.listen(3000,'127.0.0.1');
// console.log('Port is running on 3000.');
