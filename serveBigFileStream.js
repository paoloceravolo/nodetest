const http = require('http');
const fs = require('fs');
const s = http.createServer();

s.on('request', function (req, res){
	const src = fs.createReadStream('./bigFile.txt');
	src.pipe(res);
});

s.on('error', function(err){console.log(err)});

s.listen(3000);