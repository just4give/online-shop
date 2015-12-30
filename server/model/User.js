/**
 * Created by mithundas on 12/29/15.
 */
var mongoose = require('mongoose');


var Address = new mongoose.Schema({
    addressLine1: String ,
    addressLine2: String,
    city: String,
    state: String,
    postalCode: String
});


var UserSchema   = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    salt: String,
    facebookId: String,
    defaultAddress: Address
});



// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);