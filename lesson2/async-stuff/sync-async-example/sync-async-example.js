'use strict';
const fs = require('fs');
const filename = 'data.txt';


//Sync way
console.log("Started reading the file!");
const dataFromFileSync = fs.readFileSync(filename, 'utf8');
console.log(`Data from file: *** ${dataFromFileSync} ***`);
console.log("Finished reading the file!");


//Async way
console.log("Started reading the file!");
fs.readFile(filename, 'utf8', (error, dataFromFileAsync) => {
    if (error) throw error;
    console.log(`Data from file: *** ${dataFromFileAsync} ***`);
    console.log("Finished reading the file!");
});
console.log("Running everything else!");

