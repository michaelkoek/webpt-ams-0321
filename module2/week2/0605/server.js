const express = require('express');
const mongoose = require('mongoose');
const birds = require('./birds/birds');
const courseRoute = require('./routes/courses');

const Students = require('./models/Students');
const Courses = require('./models/Courses');

mongoose.connect('mongodb://localhost:27017/week2-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log(`Connected to mongo database name: "${db.connections[0].name}"`))
.catch(err => {
    console.error('Error connecting to mongo', err)
})

const app = express();

app.use(express.urlencoded({ extended: false })) 
app.use(express.json())

app.use('/birds', birds)
app.use('/courses', courseRoute);

app.get('/', (req, res, next) => {

    // Using .find() and passing an empty object as filter criteria (filter on nothing)
    // https://mongoosejs.com/docs/queries.html
    Students.find({}, (err, students) => {
        console.log('===>', students)
        // res.status(200).json({students})
    })

    res.send(`
        <form method="POST">
            <input type="text" name="username" />
            <button type="submit">submit</button>
        </form>
    `)
})

app.post('/add-student', (req, res) => {

    // destructure body
   const { name, age, hobbies, city } = req.body;

   console.log(req.body);
   // Method 1 of storing data
//    Students.create({
//        name,
//        age: age, // demo purpose long way of writing
//        hobbies,
//        city,
//    }).then(result => {
//         return res.status(200).json({
//             "message": "Good going, Yo!"
//         })
//    }).catch(err => {
//        return res.status(400).json({
//            "message": "Failed (1): " + err
//        })
//    })

    // Method 2
    const student = new Students({
        name,
        age,
        hobbies,
        city
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


app.listen(3005);
