const http = require('http');

function handle_request(req,res){
console.log("Mi hai chiamato con metodo " +req.method);
console.log("Mi hai chiamato con URL " +req.url);
res.writeHead(200,{'Content-Type':'application/json'});
res.end(JSON.stringify({error:null})+ "\n");
}

var s = http.createServer(handle_request);
s.listen(3000);