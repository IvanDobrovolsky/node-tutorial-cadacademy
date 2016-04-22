'use strict';

const express = require('express');
const app = express();
const port = 3000;
const utils = require('./../../../utils');
const filename = 'data.txt';

app.get('/read', (request, response) => {
    response.write('<h1>Starting reading the data!</h1>');
    utils.getDataFromFile(filename,
        err => console.error(err),
        data => response.write(`<p style="color: deepskyblue">${data}</p>`)
    );
    response.write('<h1>Data has been successfully read!</h1>')
});

app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/index.html`);
});

console.log(`The magic happens on port ${port}: `);
app.listen(port);