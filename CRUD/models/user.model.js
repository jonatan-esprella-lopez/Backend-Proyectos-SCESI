const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    password: { type: String, required: true },
}); 


module.exports = mongoose.model('User', User);