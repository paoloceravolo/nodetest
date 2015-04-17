var http = require("http");

function processa(req, res){
	var corpo = 'Sono qui! mi hai chimato!\n';
	var content_length = corpo.length;
	
	res.writeHead(200, {'Content-Length': content_length, 'Content-Type': 'text/plain'});
	res.end(corpo);
	
	}

var s = http.createServer(processa);
s.listen(8383);