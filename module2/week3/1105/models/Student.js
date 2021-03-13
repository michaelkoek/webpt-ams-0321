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
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Courses',
    },
    
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Student', studentSchema);
