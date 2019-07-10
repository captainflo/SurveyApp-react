const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    instagramId: String,
    facebookId: String,
    linkedinId: String
});

mongoose.model('users', userSchema);