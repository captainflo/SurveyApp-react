const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    instagramId: String,
    // linkedinId: String
});

mongoose.model('users', userSchema);