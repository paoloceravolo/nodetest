// Set up our DB API globals.
var Db         = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server     = require('mongodb').Server;
var BSON       = require('mongodb').BSON;
var ObjectID   = require('mongodb').ObjectID;


// Main DB provider object
PProvider = function(host, port, user, pass) {
    this.db = new Db(process.env.OPENSHIFT_APP_NAME, new Server(host, port, { auto_reconnect: true }, {}));
    this.db.open(function(error, db){
        db.authenticate(user, pass, function(error, result) {

			if(!err) {
        console.log("Connesso al database");
        	db.collection('partite', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'partite' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        	});
        });
    });
};
};
 
PProvider.prototype.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving wine: ' + id);
    db.collection('partite', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};
 
PProvider.prototype.findAll = function(req, res) {
    db.collection('partite', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};
 
PProvider.prototype.addP = function(req, res) {
    var partita = req.body;
    console.log('Adding wine: ' + JSON.stringify(partita));
    db.collection('partite', function(err, collection) {
        collection.insert(partita, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}
 
PProvider.prototype.updateP = function(req, res) {
    var id = req.params.id;
    var partita = req.body;
    console.log('Updating wine: ' + id);
    console.log(JSON.stringify(partita));
    db.collection('partite', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, partita, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating wine: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(partita);
            }
        });
    });
}
 
PProvider.prototype.deleteP = function(req, res) {
    var id = req.params.id;
    console.log('Deleting wine: ' + id);
    db.collection('partite', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}
 
/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function() {
 
    var partite = [
    {
                "giornata": "Prima Giornata",
                "casa": "Galles",
                "ospite": "Inghilterra",
                "ptCasa": "16",
                "ptOspite": "21",
                "stadio": "Millennium Stadium"
            },
            {
                "giornata": "Prima Giornatat",
                "casa": "Italia",
                "ospite": "Irlanda",
                "ptCasa": "3",
                "ptOspite": "26",
                "stadio": "Stadio Olimpico"
            },
            {
                "giornata": "Prima Giornata",
                "casa": "Francia",
                "ospite": "Scozia",
                "ptCasa": "15",
                "ptOspite": "8",
                "stadio": "Stade de France"
            },
            {
                "giornata": "Seconda Giornata",
                "casa": "Inghilterra",
                "ospite": "Italia",
                "ptCasa": "47",
                "ptOspite": "17",
                "stadio": "Twickenham"
            },
            {
                "giornata": "Seconda Giornata",
                "casa": "Irlanda",
                "ospite": "Francia",
                "ptCasa": "18",
                "ptOspite": "11",
                "stadio": "Aviva Stadium"
            },
            {
                "giornata": "Seconda Giornata",
                "casa": "Scozia",
                "ospite": "Galles",
                "ptCasa": "23",
                "ptOspite": "26",
                "stadio": "Murrayfield"
            },
            {
                "giornata": "Terza Giornata",
                "casa": "Scozia",
                "ospite": "Italia",
                "ptCasa": "19",
                "ptOspite": "22",
                "stadio": "Murrayfield"
            },
            {
                "giornata": "Terza Giornata",
                "casa": "Francia",
                "ospite": "Galles",
                "ptCasa": "13",
                "ptOspite": "20",
                "stadio": "Stade de France"
            },
            {
                "giornata": "Terza Giornata",
                "casa": "Irlanda",
                "ospite": "Inghilterra",
                "ptCasa": "19",
                "ptOspite": "9",
                "stadio": "Aviva Stadium"
            },
            {
                "giornata": "Quarta Giornata",
                "casa": "Galles",
                "ospite": "Irlanda",
                "ptCasa": "23",
                "ptOspite": "16",
                "stadio": "Millennium Stadium"
            },
            {
                "giornata": "Quarta Giornata",
                "casa": "Inghilterra",
                "ospite": "Scozia",
                "ptCasa": "25",
                "ptOspite": "13",
                "stadio": "Twickenham"
            },
            {
                "giornata": "Quarta Giornata",
                "casa": "Italia",
                "ospite": "Francia",
                "ptCasa": "0",
                "ptOspite": "29",
                "stadio": "Stadio Olimpico"
            },
            {
                "giornata": "Quinta Giornata",
                "casa": "Italia",
                "ospite": "Galles",
                "ptCasa": "20",
                "ptOspite": "61",
                "stadio": "Stadio Olimpico"
            },
            {
                "giornata": "Quinta Giornata",
                "casa": "Scozia",
                "ospite": "Irlanda",
                "ptCasa": "10",
                "ptOspite": "40",
                "stadio": "Murrayfield"
            },
            {
                "giornata": "Quinta Giornata",
                "casa": "Inghilterra",
                "ospite": "Francia",
                "ptCasa": "55",
                "ptOspite": "35",
                "stadio": "Twickenham"
            }];
 
    db.collection('partite', function(err, collection) {
        collection.insert(partite, {safe:true}, function(err, result) {});
    });

// Export the DB provider for use in other modules.
exports.PProvider = PProvider;