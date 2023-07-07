const mongoose = require("mongoose");

const textSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "input cannot be empty"]
    }
})

module.exports = mongoose.model("Text", textSchema)