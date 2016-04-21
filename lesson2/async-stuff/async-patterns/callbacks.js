
"use strict";
const fs = require('fs');

//Callback way
function getDataFromFile(filename, errorHandler, successHandler){
    fs.readFile(filename, 'utf8', (err, data) => {
        if(err) errorHandler(err);
        successHandler(data);
    })
}


getDataFromFile('data.txt',
    err => console.error(err),
    data => console.log(data)
);





