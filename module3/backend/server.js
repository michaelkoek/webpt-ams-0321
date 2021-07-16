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
    const { form } = req.body;
    console.log(req.body)

    // Create a new object with the form data
    // And add a unique id to it
    const newComplaint = {
        id: uuidv4(),
        ...form
    }

    fs.readFile('savedUsers.json', 'utf8', (err, data) => {
        if (err) {
            console.error('readFile error: ',err)
        }
        // Check if the file is empty. If not, use JSON.parse()
        const currentData = data ? JSON.parse(data) : data;

        // Grab the old data and the new data and safe it in the variabel
        // which will be stored in the JSON file
        const savedComplaints = [...currentData, newComplaint]

        // Write the data to the JSON file
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
