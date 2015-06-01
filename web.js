var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var games = require('./routes/games');
var fixtures = require('./fixtures/games');
var Game = require('./models/Game.js');

var mongoose = require('mongoose');
mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL, function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
        fixtures.populateDB(); /* POPOLO IL DB SE VUOTO */
    }
});

app.use(bodyParser());

// In questo modo posso fare delle mini-app, 
// attacco il router delle partite sotto la radice /games
app.use('/games', games);
 
var port =  process.env.OPENSHIFT_NODEJS_PORT || 8080;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally


var server=app.listen(port, address);