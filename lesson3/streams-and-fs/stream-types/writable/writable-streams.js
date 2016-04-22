"use strict";

const fs = require('fs');

//Creating a readable and a writable streams
const inputFileStream = fs.createReadStream('./../readFrom.txt');
const outputFileStream = fs.createWriteStream('./../writeTo.txt');

inputFileStream.setEncoding('utf8');

inputFileStream.pipe(outputFileStream);
inputFileStream.pipe(process.stdout);

inputFileStream.on('end', () => outputFileStream.end());