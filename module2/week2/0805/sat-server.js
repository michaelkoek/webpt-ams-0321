const express = require('express');
const mongoose = require('mongoose');

const coursesRoute = require('./routes/courses');
const studentRoute = require('./routes/student');

const app = express();

mongoose.connect('mongodb://localhost:27017/week2-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log(`Connected to mongo database name: "${db.connections[0].name}"`))
    .catch(err => {
        console.error('Error connecting to mongo', err)
    })

app.use(express.urlencoded({ extended: false })) 
app.use(express.json())

app.use('/course', coursesRoute);
app.use('/student', studentRoute);

app.get('/', (req, res, next) => {
    res.send('Welcome to Saturday')
});

app.listen(3001);
