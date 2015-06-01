var mongoose = require('mongoose');
var Game = require('../models/Game.js');

exports.populateDB = function() {
 
    var partite = [
    {
                "giornata": "Prima Giornata",
                "casa": "Galles",
                "ospite": "Inghilterra",
                "ptCasa": 16,
                "ptOspite": 21,
                "stadio": "Millennium Stadium"
            },
            {
                "giornata": "Prima Giornatat",
                "casa": "Italia",
                "ospite": "Irlanda",
                "ptCasa": 3,
                "ptOspite": 26,
                "stadio": "Stadio Olimpico"
            },
            {
                "giornata": "Prima Giornata",
                "casa": "Francia",
                "ospite": "Scozia",
                "ptCasa": 15,
                "ptOspite": 8,
                "stadio": "Stade de France"
            },
            {
                "giornata": "Seconda Giornata",
                "casa": "Inghilterra",
                "ospite": "Italia",
                "ptCasa": 47,
                "ptOspite": 17,
                "stadio": "Twickenham"
            },
            {
                "giornata": "Seconda Giornata",
                "casa": "Irlanda",
                "ospite": "Francia",
                "ptCasa": 18,
                "ptOspite": 11,
                "stadio": "Aviva Stadium"
            },
            {
                "giornata": "Seconda Giornata",
                "casa": "Scozia",
                "ospite": "Galles",
                "ptCasa": 23,
                "ptOspite": 26,
                "stadio": "Murrayfield"
            },
            {
                "giornata": "Terza Giornata",
                "casa": "Scozia",
                "ospite": "Italia",
                "ptCasa": 19,
                "ptOspite": 22,
                "stadio": "Murrayfield"
            },
            {
                "giornata": "Terza Giornata",
                "casa": "Francia",
                "ospite": "Galles",
                "ptCasa": 13,
                "ptOspite": 20,
                "stadio": "Stade de France"
            },
            {
                "giornata": "Terza Giornata",
                "casa": "Irlanda",
                "ospite": "Inghilterra",
                "ptCasa": 19,
                "ptOspite": 9,
                "stadio": "Aviva Stadium"
            },
            {
                "giornata": "Quarta Giornata",
                "casa": "Galles",
                "ospite": "Irlanda",
                "ptCasa": 23,
                "ptOspite": 16,
                "stadio": "Millennium Stadium"
            },
            {
                "giornata": "Quarta Giornata",
                "casa": "Inghilterra",
                "ospite": "Scozia",
                "ptCasa": 25,
                "ptOspite": 13,
                "stadio": "Twickenham"
            },
            {
                "giornata": "Quarta Giornata",
                "casa": "Italia",
                "ospite": "Francia",
                "ptCasa": 0,
                "ptOspite": 29,
                "stadio": "Stadio Olimpico"
            },
            {
                "giornata": "Quinta Giornata",
                "casa": "Italia",
                "ospite": "Galles",
                "ptCasa": 20,
                "ptOspite": 61,
                "stadio": "Stadio Olimpico"
            },
            {
                "giornata": "Quinta Giornata",
                "casa": "Scozia",
                "ospite": "Irlanda",
                "ptCasa": 10,
                "ptOspite": 40,
                "stadio": "Murrayfield"
            },
            {
                "giornata": "Quinta Giornata",
                "casa": "Inghilterra",
                "ospite": "Francia",
                "ptCasa": 55,
                "ptOspite": 35,
                "stadio": "Twickenham"
            }];
    
    Game.count({}, function(err, result){
        if(err){
            console.log("Error Populating Database !");
        } else {
            if(result <= 0){
                Game.collection.insert(partite);
            }
        }
    });
};