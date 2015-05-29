var express = require('express');
var partite = require('./router/main');
var app = express();

app.configure(function () {
    app.use(express.logger('dev'));  
    app.use(express.bodyParser());
});

app.get('/partite', partite.findAll);
app.get('/partite/:id', partite.findById);
app.post('/partite', partite.addWine);
app.put('/partite/:id', partite.updateWine);
app.delete('/partite/:id', partite.deleteWine);
 
var port =  process.env.OPENSHIFT_NODEJS_PORT || 8080;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally


var server=app.listen(port, address);