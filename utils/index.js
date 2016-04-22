'use strict';

const fs = require('fs');

function getDataFromFile(filename, errorHandler, successHandler){
    fs.readFile(filename, 'utf8', (err, data) => {
        //Error handling
        if (err) errorHandler(err);

        //Success handler
        successHandler(data);
    })
}

module.exports = {
    getDataFromFile
};