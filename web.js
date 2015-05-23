var express=require('express');
var app=express();

var port =  process.env.OPENSHIFT_NODEJS_PORT || 8080;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally

// attivazione di router e di EJS per la gestione del rendering
require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').renderFile);

var server=app.listen(port, address);