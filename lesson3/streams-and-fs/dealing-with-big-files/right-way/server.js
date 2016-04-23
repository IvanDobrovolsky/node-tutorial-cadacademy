"use strict";

/**
  Right WAY!

  In this case only a chunk of 64kb is read from fs and placed into buffer.
  As a result it works faster!
 */

const express = require('express');
const app = express();
const port = 2222;
const fs = require('fs');
const utils = require('./../../../../utils');
const filename = './../../ukraine-wiki.html';

//Setting public directory for front end
app.use(express.static(__dirname));


app.get('/read', (request, response) => {

    const file = fs.createReadStream(filename, 'utf8');

    file.on('open', () => response.write(utils.respondWithToastrMessages('info', 'Opened the file!')));

    file.on('error', (err) => response.write(utils.respondWithToastrMessages('error', err)));

    file.on('data', chunk => {
       response.write(chunk + utils.respondWithToastrMessages('success', `Successfully read a chunk! (${chunk.length} bytes)` ))
    });

    file.on('end', () => response.write(utils.respondWithToastrMessages('warning', 'Finish reading! The file will be closed!')));

    file.on('close', () => {
        response.write(utils.respondWithToastrMessages('info', 'Closed the file!'));
        response.end();
    });

    //If response was closed, the file hangs out. The stream needs to be closed!
    response.on('close', () => {
      file.destroy();
    });

});

app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/index.html`);
});

console.log(`The app is listening on port ${port}`);
app.listen(port);
