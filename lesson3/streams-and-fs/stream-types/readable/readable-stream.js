"use strict";

const fs = require('fs');

//Creating a readable and a writable streams
const readableStream = fs.createReadStream('./../readFrom.txt');

//Adding ecoding
readableStream.setEncoding('utf8');

readableStream.on('data', chunk => console.log(chunk));


//When there is no more data to read (end is reached), the stream emits an end event.
//We listen to this event to get notified when the end is reached.
readableStream.on('end', () => console.log("Finished reading the file!"));

