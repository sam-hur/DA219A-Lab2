const mongoose = require('mongoose')

module.exports = mongoose.model('Student', new mongoose.Schema({
    StudentID: { Type: String, required: true, unique: true },
    name: { Type: String, required: true, unique: false },
    age: { Type: Number, required: true, unique: false }
}))