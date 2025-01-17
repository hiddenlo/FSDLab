// Import prompt-sync
const prompt = require('prompt-sync')();

const person={
    //properties
    name: prompt("Enter your name : "),
    age :parseInt(prompt("Enter your age : ")),
    greet()
    {
        console.log(`Hello there! Myself ${this.name}`);
    },
    isAdult()
    {
        return this.age>=18;
    }
}

person.greet();
console.log("Is the person an adult?",person.isAdult());
