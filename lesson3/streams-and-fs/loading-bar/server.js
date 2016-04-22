"use strict";

const express = require('express');
const app = express();
const port = 2222;
const filename = 'ukraine-wiki-big.html';
const utils = require('./../../../utils');

const fs = require('fs');

app.get('/load', (request, response) => {

    fs.stat(filename, (err, stats) => {
        if (err) throw  err;

        if(stats.isFile()){

            const file = fs.createReadStream(filename, 'utf8');
            let progress = 0;
            const total = stats.size;

            file.on('data', chunk => {
                progress += chunk.length;
                let status = Math.ceil(progress/total * 100);
                console.log(status + '%');
                response.write(`<p style="color: black; background-color: plum; width: ${status}%">${status + '%\n'}</p>`);
            });

            file.on('close', () => response.end(utils.respondWithToastrMessages('info', 'Finished loading!')));
        }
    })
});

app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/index.html`);
});

console.log(`The app is listening on port ${port}`);
app.listen(port);
