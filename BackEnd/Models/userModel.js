const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: { type: String, require: true },
    phone: { type: Number, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
}, {timestamps:true})

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;