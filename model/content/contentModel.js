// ==== Libraries used ====
var mongoose = require('mongoose')


// ==== Schema Setup ====
var Schema = mongoose.Schema()

// ==== Schema Building ====
var contentSchema = new Schema({

    type: {
        type: String,
        enum: ["text", "quiz", "questions", "media"], // ==== Quiz are MCQ based test. Questions are "enter your answer" based test (fill the blanks). ====
        required: [true, "Type is required"]
    },
    textArr: [
        { type: String }
    ],
    quizArr: [
        {
            question: {type: String},
            options: [{type: String}]
        }
    ],
    questionsArr: [
        { type: String }
    ],
    media: {
        type: String,
        default: null
    },
    session: {
        type: Schema.Types.ObjectId,
        ref: "schema",
        required: [true, "Schema is required"]
    },
    order: {
        type: Number,
        min: 0,
        required: [true, "Order is required"]
    }


})


module.exports = mongoose.model("content", contentSchema, "content")