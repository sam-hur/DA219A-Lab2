const mongoose = require('mongoose')

module.exports = mongoose.model('Registration', new mongoose.Schema({
    student_id: { type: String, required: true, unique: false },
    course_code: { type: String, required: true, unique: false },
    registration_date: { type: Date, required: false, unique: false }
}, { collection: 'registration' }))
