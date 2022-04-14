const mongoose = require('mongoose')

module.exports = mongoose.model('Course', new mongoose.Schema({
    course_code: { type: String, required: true, unique: true, maxlength: 50 },
    course_name: { type: String, required: true, unique: false },
    course_description: { type: String, required: true, unique: false }
}, { collection: 'course' }))
