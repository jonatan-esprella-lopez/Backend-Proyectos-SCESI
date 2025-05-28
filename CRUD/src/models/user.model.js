const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    country: String,
    city: String,
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;