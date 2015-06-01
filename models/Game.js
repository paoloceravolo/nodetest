var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
  giornata: String,
  casa: String,
  ospite: String,
  ptCasa: Number,
  ptOspite: Number,
  stadio: String
});

module.exports = mongoose.model('Game', GameSchema);