const http = require('http');
const fs = require('fs');
const s = http.createServer();

s.on('request', function (req, res){
	fs.readFile('./bigFile.txt', function (err,data){
		if(err) throw err;
		res.end(data);
	});
});

s.on('error', function(err){console.log(err)});

s.listen(3000);