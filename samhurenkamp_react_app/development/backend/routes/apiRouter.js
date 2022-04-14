const express = require('express');
const ROUTER = express.Router();

const Student = require('../database/model/student.schema.js');
const Course = require('../database/model/course.schema.js');
const Registration = require('../database/model/registration.schema.js');

// GET
ROUTER.get('/student', async (_, res) => {
    let data = await Student.find() // returns all students
    if (!data) {
        res.status(400).json(
            { message: `Error: Student not found!` }
        )
    }
    res.send(data)
})

ROUTER.get('/course', async (_, res) => {
    let data = await Course.find()
    if (!data) {
        return res.status(400).json(
            { message: `Error: Course not found!` }
        )
    }
    res.send(data)
})

ROUTER.get('/registration', async (_, res) => {
    let data = await Registration.find()
    if (!data) {
        return res.status(400).json(
            { message: `Error: Registration date not found!` }
        )
    }
    res.send(data)
})

module.exports = ROUTER
