'use strict';

const fs = require('fs');


//Reading the data from a file
function getDataFromFile(filename, errorHandler, successHandler){
    fs.readFile(filename, 'utf8', (err, data) => {
        //Error handling
        if (err) errorHandler(err);

        //Success handler
        successHandler(data);
    })
}

//Responding with toastr interactive messages
function respondWithToastrMessages(type, message){

    let responseText = '';

    function generateTemplateWithCode(code){
        return  `<!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.css">
	                        <script src="https://code.jquery.com/jquery-2.2.3.min.js"   integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo="   crossorigin="anonymous"></script>
	                        <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.js"></script>
                        </head>
                        <body>
                            <script>${code}</script>
                        </body>
                    </html>`
    }

    switch (type){
        case 'success': {
            responseText = generateTemplateWithCode(`toastr.success("${message}")`);
            break;
        }
        case 'info': {
            responseText = generateTemplateWithCode(`toastr.info("${message}")`);
            break;
        }
        case 'error': {
            responseText = generateTemplateWithCode(`toastr.error("${message}")`);
            break;
        }
        case 'warning': {
            responseText = generateTemplateWithCode(`toastr.warning("${message}")`);
            break;
        }
        default: break;
    }

    return responseText;
}
module.exports = {
    getDataFromFile,
    respondWithToastrMessages
};