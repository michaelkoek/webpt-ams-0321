const cookieParser = require('cookie-parser');
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const app = express();
const bcryptjs = require('bcryptjs');
const saltRounds = 12;
const User = require('./User.model');


mongoose.connect('mongodb://localhost:27017/hash', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, })
.then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//async function to compare password and hash :D
const comparePassword = async (password, hash) => {
    try {
        // Compare password
        return await bcrypt.compare(password, hash);
    } catch (error) {
        next(error);
    }
    // Return false if error
    return false;
};

app.get('/', (req, res) => res.render('index'));

app.get('/signup', (req, res) => res.render('signup'));

app.post('/signup', async (req, res, next) => {
    const { username, email, password} = req.body;
    //error handling
    if (!username || !email || !password) {
        //The test() method executes a search for a match between a regular expression and a specified string. 
        res.render('signup', { errorMessage: 'Please provide your username, email AND password.' });
        return;
    }

    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (!regex.test(password)) {
    res
        .status(500)
        .render('signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
    return;
    }

    try {
        const hash = await bcryptjs.hash(password, saltRounds);
        const newUser = await User.create({
            username, email, passwordHash: hash
        });
        res.redirect('/userProfile');
        console.log(`new user : ${newUser} your hashed password is: ${hash}`);
    } catch (e) {
        next(e);
    }  
});

app.get('/login', (req, res) => res.render('login'));

app.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  if (email === '' || password === '') {
    res.render('login', {
      errorMessage: 'Please enter both, email and password to login.'
    });
    return;
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
        res.render('login', { errorMessage: 'Email is not registered. Try with other email.' });
        return;
      } else if (comparePassword(password, user.passwordHash)) {
          console.log(`password : ${password} hash: ${user.passwordHash}`);
        res.redirect('/userProfile');
      } else {
        res.render('login', { errorMessage: 'Incorrect password.' });
      }
  } catch (e) {
    next(e);
  }
});

app.get('/userProfile', (req, res) => res.render('userProfile'));


app.listen(3000);
