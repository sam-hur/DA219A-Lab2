const mongoose = require('mongoose')

module.exports = mongoose.model('Student', new mongoose.Schema({
    // student_id = _id
    full_name: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: false }
}, { collection: 'student' }))
