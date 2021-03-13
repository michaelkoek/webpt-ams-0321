const express = require('express')
const StudentModel = require('../models/Student');
const CourseModel = require('../models/Courses');

const studentController = require('../controllers/student-controller');

const router = express.Router();

// define the home page route
router.get('/', studentController.getUsers)
router.post('/save', studentController.saveUserById)

router.get('/:id', async (req, res, next) => {
    const studId = req.params.id;

    let stud
    try {
        stud = await StudentModel.findById(studId).populate('course');
        console.log(stud)
    } catch(err) {
        const error = new Error('something went wrong')
        return next(error);
    }
  
    if (!stud || stud.length === 0) {
      return next(
        new Error('Could not find places for the provided user id.', 404)
      );
    }
  
    res.json(
        { stud: stud.toObject({ getters: true }) }
    );
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
