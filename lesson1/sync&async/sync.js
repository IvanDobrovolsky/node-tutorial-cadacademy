
'use strict';
const fs = require('fs');

//This is how sync code works
const text = fs.readFileSync('data.txt', 'utf8');
console.log(text);