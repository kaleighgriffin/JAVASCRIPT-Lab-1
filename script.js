const myName="Mitch Cuckovich";
const age="25";
const birthday="January 24";

let detroitGC = prompt("Are you a student at Grand Circus Detroit or Grand Rapids?");

if (detroitGC === "Detroit") {
    console.log(`My name is `, myName, `and I am a student at Grand Circus in Detroit, Michigan.
    I am currently `, age, `years old and my birthday is on `, birthday, `.`);
} else {
    console.log(`My name is `, myName, `and I am a student at Grand Circus in Grand Rapids, Michigan.
    I am currently `, age, `years old and my birthday is on `, birthday, `.`);
}


let lifeEvents = ["I was born in Troy, Michigan.", "I went to Hope College.", 
    "I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.",
    "I'm a graduate of the front-end bootcamp."]

for (let i = 0; i < lifeEvents.length; i++) {
    console.log( lifeEvents[i] );
}


let counter = 0;
let randomNumber = Math.random();

while (randomNumber <= 10) {
    randomNumber = Math.round();
    if (randomNumber !==5) {
        console.log(randomNumber, ` !== 5`);
    } else if (randomNumber === 5) {
        console.log(randomNumber, ` === 5. It took `, randomNumber, ` iterations to randomly genterate the number 5.`);
    }
    else {
        console.log(`Break`);
    }
}





/*
Extended Challege:

let hoursWorked = prompt("How many hours did you work?");
let payWage = prompt("How much did you make per hour worked?");

const payCheck = hoursWorked * payWage;

console.log(`With a wage of $`,payWage,`and`,hoursWorked,`hours worked your pay is $`,payCheck, `.`);
*/