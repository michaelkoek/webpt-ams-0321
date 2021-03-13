const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    age: Number,
    hobbies: [String],
    city: {
        type: String,
        enum: ['Amsterdam', 'Den Haag', 'Barcelona', 'Utrecht']
    },
    course: String,
});

module.exports = mongoose.model('Student', studentSchema);
