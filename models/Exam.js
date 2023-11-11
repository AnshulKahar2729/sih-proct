const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const examSchema = new Schema({
    examName: {
        type: String,
        required: true,
    },
    examDate: {
        type: Date,
        required: true,
    },
    examDuration: {
        type: Number,
        required: true,
    },
    questions: {type:Array},
});

// create exam model
const Exam = model("Exam", examSchema);

module.exports = Exam;