const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('hallo');
})

app.post('/api/users', (req, res) => {
    const savedComplaints = [];
    const { form } = req.body;

    const newComplaint = {
        id: uuidv4(),
        ...form
    }

    fs.readFile('savedUsers.json', 'utf8', (err, data) => {
        if (err) {
            console.error('readFile error: ',err)
        }
        const currentData = data ? JSON.parse(data) : data;
        savedComplaints = [...currentData, newComplaint]

        fs.writeFile(
            'savedUsers.json',
            JSON.stringify(savedComplaints),
            (err) => {
                if (err) {
                    console.error('writeFile error: ',err)
                };
                console.log('the file has been save');
            }
        )
    })

    res.status(201).json({})
})

app.get('/api/users', (req, res) => {
    
})

app.listen(8888);
