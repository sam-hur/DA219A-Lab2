require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const uri = process.env.DB_CONNECT || "mongodb+srv://samroot:sampass@sam-db.spny2.mongodb.net/DA219A-Lab1?retryWrites=true&w=majority"
const path = require('path')
const API = require(path.join(__dirname, '..', 'routes', 'apiRouter.js'))
var app = undefined;

let connect = async () => await mongoose.connect(
    uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("You have been successfully connected to the Database!"))
    .then(() => {
        app = express()
        app.use(express.json()) // middleware
        app.use(express.static(path.resolve('..', '/production/')))
        // app.use('/style', express.static('/client/style')) // quick access to CSS
        // app.use('/script', express.static('/client/script')) // quick access to backend JS
        app.use("/api", API)  // api routes

    })
    .then(() => app.listen(PORT, () => {
        console.log(`Express Server has started on port ${PORT}!`)
    }))

module.exports = connect()