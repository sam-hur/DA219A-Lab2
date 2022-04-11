const mongoose = require('mongoose')

module.exports = mongoose.model('Course', new mongoose.Schema({
    course_id: { Type: String, required: true, unique: true },
    course_name: { Type: String, required: true, unique: false },
    course_description: { Type: String, required: true, unique: false }
}))