const mongoose = require('mongoose')

module.exports = mongoose.model('Student', new mongoose.Schema({
    student_id: { Type: String, required: true, unique: true, maxlength: 50 },
    name: { Type: String, required: true, unique: false },
    age: { Type: Number, required: true, unique: false }
}))
