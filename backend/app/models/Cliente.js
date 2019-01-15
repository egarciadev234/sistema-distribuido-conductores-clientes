const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Client = new Schema({
    name: String,
    email: String,
    address: String,
    celphone: String,
    password: String,
});

module.exports = mongoose.model('Client', Client);