const express = require('express')
const StudentModel = require('../models/Student');
const CourseModel = require('../models/Courses');

const router = express.Router();

// define the home page route
router.get('/', (req, res) => {
    console.log('homepage')
    StudentModel.find({}, (err, stud) => {
        console.log({ stud })
      
    })
    res.send('Courses home page')
})

router.post('/save', (req, res) => {
    const { name, age, hobbies, city } = req.body;
    const studname = name.toUpperCase();

    const student = new StudentModel({
        studname,
        age,
        hobbies,
        city,
        course: '6096937295fca354ae103c3e'
    })

    student.save((err) => {
        if (err) {
            return res.status(400).json({
                "message": "Failed (2): " + err
            })
        } else {
            return res.status(200).json({
                "message": "Good going, Yo!"
            })
        }
    })
})

router.get('/:id', async (req, res, next) => {
    const studId = req.params.id;

    let stud
    try {
        stud = await StudentModel.findById(studId );

    } catch(err) {
        const error = new Error('something went wrong')
        return next(error);
    }
  
    if (!stud || stud.length === 0) {
      return next(
        new Error('Could not find places for the provided user id.', 404)
      );
    }
  
    res.json({ stud: stud.toObject( { getters: true }) });
    // res.json({ stud: stud.map(s => s.toObject( { getters: true })) });
})

router.get('/course/:cid', async (req, res, next) => {
    const courseId = req.params.cid;

    let stud
    try {
        stud = await StudentModel.find({ course: courseId});

    } catch(err) {
        const error = new Error('something went wrong')
        return next(error);
    }
  
    if (!stud || stud.length === 0) {
      return next(
        new Error('Could not find places for the provided user id.', 404)
      );
    }

    res.json({ stud: stud.map(s => s.toObject( { getters: true })) });
});

router.patch('/update', async (req, res, next) => {

})



module.exports = router;
