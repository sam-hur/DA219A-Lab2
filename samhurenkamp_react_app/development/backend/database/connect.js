const mongoose = require('mongoose')
const uri = process.env.DB_CONNECT || "mongodb+srv://samroot:sampass@sam-db.spny2.mongodb.net/DA219A-Lab2?retryWrites=true&w=majority"

let connect = async () => await mongoose.connect(
    uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = { connect }