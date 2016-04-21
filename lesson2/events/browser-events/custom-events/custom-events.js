"use strict";

// First creating the event
const onInputYesEvent = new CustomEvent("inputYesAction", {});

const inputElement = document.querySelector('#name');

inputElement.addEventListener('inputYesAction', () => {
    alert("You have triggered the event!");
});

// Triggering the event if a user inputs 'yes'!
inputElement.addEventListener('change', event => {
   if (event.target.value === 'yes') {
       inputElement.dispatchEvent(onInputYesEvent);
   }
});