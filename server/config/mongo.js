/**
 * Created by mithundas on 12/29/15.
 */
var mongoose = require('mongoose');

module.exports = function( config) {

    // Connect to the beerlocker MongoDB
    mongoose.connect(config.db,{server:{poolSize:config.connectionLimit}});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Mongo connection error...'));
    db.once('open', function callback() {
        console.log('Mongo db opened');
    });

}