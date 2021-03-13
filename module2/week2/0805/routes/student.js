const express = require('express')
const StudentModel = require('../models/Student');
const CourseModel = require('../models/Courses');

const router = express.Router();

// define the home page route
router.get('/', (req, res) => {
    console.log('homepage')
    StudentModel.find({name: "Frits"}, (err, stud) => {
        console.log({ stud }, stud[0].course)
        const result = stud[0];
        console.log(result.course, result.age, result.city)

        CourseModel.find({ _id: result.course }, (err, crs) => {
            console.log('my course is', crs)
        })
    })
    res.send('Courses home page')
})

module.exports = router;
