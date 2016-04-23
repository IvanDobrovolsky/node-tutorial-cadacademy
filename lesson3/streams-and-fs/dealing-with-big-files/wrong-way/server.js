"use strict";

/**
  WRONG WAY!

  In this case the entire file is read from fs and placed into memory.
  If file's size is big or a client is slow, it will overload the server and cause problems.
 */

const express = require('express');
const app = express();
const port = 2222;
const fs = require('fs');
const utils = require('./../../../../utils');
const filename = './../../ukraine-wiki.html';


app.get('/read', (request, response) => {
    fs.readFile(filename, {encoding: 'utf8'}, (err, content) => {
        if(err) {
            response.write(utils.respondWithToastrMessages('error', err));
        } else {
            response.write(content);
            response.write(utils.respondWithToastrMessages('success', 'The file was read!'));
        }
        response.end();
    });
});

app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/index.html`);
});

console.log(`The app is listening on port ${port}`);
app.listen(port);
