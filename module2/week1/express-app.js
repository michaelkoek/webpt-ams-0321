const express = require('express');

const app = express(); // Enriched object with features
app.use(express.urlencoded({ extended: false })) // already has next()
app.use(express.json())


// CATCH ALL RESPONSES
app.use((req, res, next) => {
    console.log('hallo middleware triggered');
    next();
})

app.use((req, res, next) => {
    console.log('Middleware');
    next();
});

// app.use((req, res, next) => {
//     console.log('Middleware2');
// });

// if (req.method === 'POST' && req.url === '/') {

app.post('/', (req, res, next) => {
    const { username } = req.body;
    console.log('posted', username);
    
});

app.post('/about', () => {

})

app.get('/', (req, res, next) => {
    res.send(`
        <form method="POST">
            <input type="text" name="username" />
            <button type="submit">submit</button>
        </form>
    `)
})

app.listen(9007);
