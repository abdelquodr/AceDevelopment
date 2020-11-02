// npm modules
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String },
    userImage: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    created_at: { type: Date, default: Date.now() },
    online: { type: Boolean, default: false }
})

module.exports = mongoose.model('User', userSchema)