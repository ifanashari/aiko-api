const mongoose = require('mongoose')

const homeSchema = mongoose.Schema({
    headerTitle: String
})

module.exports = mongoose.model('Home', homeSchema)