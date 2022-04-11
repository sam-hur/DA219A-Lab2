const mongoose = require('mongoose')

module.exports = mongoose.model('Registration', new mongoose.Schema({
    student_id: { Type: String, required: true, unique: false },
    name: { Type: String, required: true, unique: false },
    age: { Type: Number, required: true, unique: false }
}))
