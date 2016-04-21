"use strict";
const EventEmitter = require('events');


//We can easily inherit the functionality from EventEmitter
class TestEventEmitter extends EventEmitter{}

const testEmitter = new TestEventEmitter();

testEmitter.on('testEvent', intervalNumber => {
    console.log(`Interval: ${intervalNumber}`);
});

let intervalNumber = 1;
setInterval(() => {
    testEmitter.emit('testEvent', intervalNumber++);
}, 1000);



