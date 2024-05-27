const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    name: String,
    dateOfBirth: Date,
    gender: String,
    phone: Number,
    date: Date,
    slot: Number,
    qr: String
});  

const Ticket =  mongoose.model('Ticket',TicketSchema);

module.exports = Ticket;
