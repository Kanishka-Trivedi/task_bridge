const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    team_code: { type: String, required: true },
    full_name: { type: String, required: true },
    title: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    role:{ type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;