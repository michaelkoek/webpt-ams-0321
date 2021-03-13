const fs = require('fs');
const http = require('http');

console.log('hallo')

fs.writeFile('user-data.txt', 'ironhack', (err) => {
    if (err) {
        console.log(err)
        return ''
    }
    console.log('Wrote to file');
})

const server = http.createServer((req, res) => {
    console.log('Incoming request');
    console.log(req.method, req.url)

    if (req.method === 'POST') {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk
            console.log(chunk)
        })

        req.on('end', () => {
            console.log('ended')
            res.end(`<h1>Bye ${body}</h1>`)
        })
        
        
    } else {
        res.setHeader('Content-Type', 'text/html')
        res.end(`
            <form method="POST">
                <input type="text" name="username" />
                <button type="submit">Submit</button>
            </form>
        `)
    }
    
})

server.listen(5001);
