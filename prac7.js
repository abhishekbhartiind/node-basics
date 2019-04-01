var fs= require('fs');
var read= fs.readFileSync('readME.txt','utf8');
console.log(read);

fs.writeFileSync('writeM.txt',read);
