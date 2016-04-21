"use strict";

const fs = require('fs');

//This is how async code works
fs.readFile('data.txt', 'utf8', (err, text) => {
   if(err){
       console.log(`An error has occurred - ${err}!`);
   }
   console.log(text.length);
});
