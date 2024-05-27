const mongoose = require('mongoose');
// const { number } = require('zod');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    address: String,
    pincode: Number,
    dateOfBirth: Date
});  

const Uuser =  mongoose.model('Uuser',UserSchema);

module.exports = Uuser;
