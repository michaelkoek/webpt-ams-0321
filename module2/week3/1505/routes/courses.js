const express = require('express')
const CoursesModel = require('../models/Courses');
const router = express.Router();

// define the home page route
router.get('/', (req, res) => {
    console.log('homepage')
    CoursesModel.find({}, (err, crs) => {
        console.log('==>', crs)
    })
    res.send('Courses home page')
})

router.get('/:cid', async (req, res, next) => {
    const id = req.params.cid;

    let course
    try {
        course = await CoursesModel.findById(id)
            .populate('students')
            .populate({
                // we are populating author in the previously populated comments
                path: 'students',
                populate: {
                  path: 'course',
                  model: 'Students'
                }
              })
    } catch(err) {
        console.error('error')
    }

    res.send({ course: course.toObject({ getters: true }) })
})

router.post('/add', (req, res) => {
    console.log('POSTED Courses')
    // res.send('Courses added')

    console.log(req.body);
    // const { name, language, timeSpan, fullTime, location } = req.body;

    // Method 2
    const course = new CoursesModel(req.body);

    course.save(err => {
        if (err) {
            return res.status(400).json({
                "message": "Noooope! because: " + err
            })
        } else {
            return res.status(200).json({
                "message": "It worked, because i LOVE you"
            })
        }
    });

})


module.exports = router;
