// npm modules
const mongoose = require('mongoose');

// files
const User = require('./user')

const ArticlesSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    author: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
    topic: { type: String, required: true },
    article: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    last_updated: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Article', ArticlesSchema)

