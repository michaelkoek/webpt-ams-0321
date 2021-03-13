const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    language: {
        type: Number,
        required: true,
    },
    timeSpan: {
        type: Number,
        required: true,
    },
    fullTime: Boolean,
    location: {
        type: String,
        enum: ['Amsterdam', 'Den Haag', 'Barcelona', 'Utrecht'],
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }],
});

module.exports = mongoose.model('Courses', courseSchema);
