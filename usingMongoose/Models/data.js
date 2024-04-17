const { Int32 } = require('mongodb')
const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    ts : String,
    machine_status : Number,
    vibration : Number
})

const TodoModel = mongoose.model("data", TodoSchema)
module.exports = TodoModel