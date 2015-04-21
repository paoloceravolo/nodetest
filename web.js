var http = require("http");

function processa(req, res){
	var corpo = 'Sono qui! mi hai chimato!\n';
	var content_length = corpo.length;
	
	res.writeHead(200, {'Content-Length': content_length, 'Content-Type': 'text/plain'});
	res.end(corpo);
	
	}

var s = http.createServer(processa);
s.listen(8080);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + port )
});