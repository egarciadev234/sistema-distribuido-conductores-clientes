const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Conductor = new Schema({
    name: String,
    email: String,
    celphone: String,
    type_vehicle: String,
    status: Boolean,
    password: String,
});

module.exports = mongoose.model('Conductor', Conductor);