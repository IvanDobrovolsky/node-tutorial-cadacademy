
"use strict";

const fs = require('fs');

function getDataFromFile(filename){
    return new Promise(function(resolve, reject) {
        fs.readFile(filename, 'utf8', function(err, data) {
            if(err) reject(err);
            resolve(data);
        })
    })
}

getDataFromFile('data.txt')
    .then(data => {console.log(data);})
    .catch(error => console.log(error));


