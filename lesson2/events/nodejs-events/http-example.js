'use strict';

const http = require('http');
const server = http.createServer();
const port = 3000;

let requestCount = 1;
server.on('request', (request, response) => {
    console.log("Got a request!");
    response.end(`<h1>Got a request ${requestCount++}</h1>`);
});

server.listen(port);