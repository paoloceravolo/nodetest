var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');
var mimeTypes = {
    "html": "text/html",
    "css": "text/css",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png"
    };

function processa(req, res) {
	// parse prende una url come stringa e ritorna un oggetto 
  var uri = url.parse(req.url).pathname;
  console.log(req.url);
  console.log(process.cwd());
  var filename = path.join(process.cwd(), decodeURI(uri));
  var statFile;

  try {
    statFile = fs.lstatSync(filename); // genera un'eccezione se il file non esiste
  } catch (e) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Resource Not Found\n');
    res.end();
    return;
  }

	// se la richiesta corrisponde a un file 
  if (statFile.isFile()) {
    var mimeType = mimeTypes[path.extname(filename).split(".").reverse()[0]];
    res.writeHead(200, {'Content-Type': mimeType} );
	// crea uno stream dal file e lo va a scrivere all'interno di res
    var fileStream = fs.createReadStream(filename);
    fileStream.pipe(res);
  } else if (statFile.isDirectory()) {
    // se la richiesta corrisponde a un file directory
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('La risorsa '+uri+' è una directory'+'\n');
    res.end();
  } else {
    // se la richiesta punta ad altro oggetto: es. symbolic link
    res.writeHead(403, {'Content-Type': 'text/plain'});
    res.write('Request Forbidden \n');
    res.end();
  }

}

var port =  process.env.OPENSHIFT_NODEJS_PORT || 8080;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally

var s = http.createServer(processa);
s.listen(port, address);