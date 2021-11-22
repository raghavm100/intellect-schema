// ==== Libraries used ====
var mongoose = require('mongoose')


// ==== Schema Setup ====
var Schema = mongoose.Schema()

// ==== Schema Building ====
var sessionSchema = new Schema({

    name: {
        type: String,
        required: [true, "Name of the session is required"]
    },
    description: {
        type: String,
        required: [true, "Description of the session is required"]
    },
    learningPath: {
        type: Schema.type.ObjectId,
        ref: "learningPath",
        required: [true, "Leatning path is required"]
    },
    order: {
        type: Number,
        min: 1,
        required: [true, "Order value is required for session"]
    }
})



// ==== Adding additional index on learning path for quick filtering ====
contentSchema.index({learningPath: 1}) 

module.exports = mongoose.model("session", sessionSchema, "session")