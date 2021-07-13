const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hallo');
})

app.get('/api/users', (req, res) => {
    
})

app.listen(8888);
