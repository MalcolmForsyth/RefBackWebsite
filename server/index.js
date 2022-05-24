const express = require('express');
const path = require('path');

const server = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};

server.use(express.static(DIST_DIR));

server.get('/api', (req, res) => {
    res.send(mockResponse);
});

server.get('/', (req, res) => {
    res.sendFile(HTML_FILE, function(err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});

server.listen(port, function () {
    console.log('server listening on port: ' + port);
});

