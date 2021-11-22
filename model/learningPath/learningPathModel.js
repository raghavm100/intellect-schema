// ==== Libraries used ====
var mongoose = require('mongoose')


// ==== Schema Setup ====
var Schema = mongoose.Schema()

// ==== Schema Building ====
var learningPathSchema = new Schema({

    name: {
        type: String,
        required: [true, "Name of the learing path is required"]
    },
    description: {
        type: String,
        required: [true, "Description of the learing path is required"]
    },
    timeToComplete : {
        type: String,
        required: [true, "Time to complete is required"]
    }
    
})


module.exports = mongoose.model("learningPath", learningPathSchema, "learningPath")