// npm modules
const mongoose = require("mongoose");

module.exports = async (dbUrl) => {
    try {
        await mongoose.connect(dbUrl, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    } catch (error) {
        console.error(error)
    }
}