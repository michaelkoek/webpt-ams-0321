const express = require('express')
const router = express.Router()

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

// define the home page route
router.get('/', (req, res) => {
    console.log('homepage')
    res.send('Birds home page')
})

router.get('/about', (req, res) => {
    console.log('about page')
    res.send('Birds about page')
})

module.exports = router
