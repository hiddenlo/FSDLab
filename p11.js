// Import prompt-sync
const prompt = require('prompt-sync')();

class Animal {
    speak() {
        console.log("Animal is speaking");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof!");
    }
}

let animal = new Animal();
let dog = new Dog();
animal.speak();
dog.speak();
