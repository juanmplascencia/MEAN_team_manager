// require mongoose
var mongoose = require('mongoose');
// create the schema
var PlayerSchema = new mongoose.Schema({
    name: String,
    position: String
});
// register the schema as a model
var Player = mongoose.model('players', PlayerSchema);