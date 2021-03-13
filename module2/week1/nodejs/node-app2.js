const http = require('http');

const server = http.createServer((req, res) => {
    console.log('incoming request');
    console.log('method: ', req.method, 'my url:', req.url)
    
    res.setHeader('Content-Type', 'text/html');

    if (req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk
        })

        req.on('end', () => {
            const username = body.split('=')[1]
            res.end(`<h1>got it ${username}</h1>`)
        })

    } else {
        res.end(`
            <form method="POST">
                <input type="text" name="username" />
                <button type="submit">submit</button>
            </form>
        `)
    }

});

server.listen(8008);
