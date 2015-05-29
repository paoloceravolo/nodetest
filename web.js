var express = require('express');
var app = express();


var Provider = require('./router/main.js').PProvider;

app.configure(function () {
    app.use(express.logger('dev'));  
    app.use(express.bodyParser());
});

// Set up the DB
var prov = new Provider(process.env.OPENSHIFT_MONGODB_DB_HOST,
                            parseInt(process.env.OPENSHIFT_MONGODB_DB_PORT),
                            process.env.OPENSHIFT_MONGODB_DB_USERNAME,
                            process.env.OPENSHIFT_MONGODB_DB_PASSWORD);

app.get('/partite', partite.findAll);
app.get('/partite/:id', partite.findById);
app.post('/partite', partite.addP);
app.put('/partite/:id', partite.updateP);
app.delete('/partite/:id', partite.deleteP);
 
var port =  process.env.OPENSHIFT_NODEJS_PORT || 8080;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally


var server=app.listen(port, address);