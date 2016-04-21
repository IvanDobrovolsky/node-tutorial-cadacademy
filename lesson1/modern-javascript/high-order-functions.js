"use strict";

/**
* Higher order functions allow us to use functional programming style and make our code descriptive and clear
*/

const javaScriptGurus = [
    {
        name: "Ivan",
        surname: "Dobrovolsky",
        age: 22,
        position: "Full-stack JavaScript developer",
        company: "Levi9",
        skills: ["JavaScript", "React.js", "Node.js", "Angular.js"],
        address: {
            city: "Kyiv",
            country: "Ukraine"
        }
    },
    {
        name: "Brendan",
        surname: "Eich",
        age: 55,
        position: "JavaScript creator",
        company: "Mozilla Foundation",
        skills: ["JavaScript"],
        address: {
            city: "Pittsburgh",
            country: "US"
        }
    },
    {
        name: "Dan",
        surname: "Abramov",
        age: 28,
        position: "Front end developer and contributor",
        company: "Facebook",
        skills: ["JavaScript", "React", "Redux"],
        address: {
            city: "London",
            country: "UK"
        }
    },
    {
        name: "David",
        surname: "Walsh",
        age: 31,
        position: "JavaScript architect",
        company: "Mozilla Foundation",
        skills: ["JavaScript", "jQuery", "HTML5", "Dojo"],
        address: {
            city: "Madison",
            country: "US"
        }
    },
    {
        name: "John",
        surname: "Papa",
        age: 39,
        position: "Google developer expert",
        company: "Google",
        skills: ["JavaScript", "Angular", "Angular2"],
        address: {
            city: " Orlando",
            country: "US"
        }
    },
    {
        name: "TJ",
        surname: "Holowaychuk",
        age: 30,
        position: "JavaScript Architect",
        company: "Medium",
        skills: ["JavaScript", "Node.js", "Express.js"],
        address: {
            city: "Victoria",
            country: "Canada"
        }
    }
];

//Helper functions
const isFromTheUS = person => person.address.country == 'US';
const knowsJavascript = person => person.skills.includes('JavaScript');
const knowsJQuery = person => person.skills.includes('jQuery');
const worksInGoogle = person => person.company == 'Google';


//How many gurus are from the US?
console.log(javaScriptGurus.filter(isFromTheUS).length);

//Do all people have JavaScript in there skills list?
console.log(javaScriptGurus.every(knowsJavascript));

//Does somebody have jQuery skill?
console.log(javaScriptGurus.some(knowsJQuery));

//What are the companies the gurus work for
console.log(Array.from(new Set(javaScriptGurus.map(person => person.company))));

//Who works in Google?
const personWhoWorksInGoogle = javaScriptGurus.find(worksInGoogle);

console.log(personWhoWorksInGoogle.name + " " + personWhoWorksInGoogle.surname);


/**
 * Just a single line of code does a lof of work for us when working with data.
 */