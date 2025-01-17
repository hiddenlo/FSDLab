// Import prompt-sync
const prompt = require('prompt-sync')();

var varinput=prompt("Enter the number for var: ");
var x=varinput;
console.log("var: ",x);

console.log("This is for understanding the hoisting of var");
var name="Shravya";
console.log("var: ",name);
var y=name;
console.log("var: ",y);

let letinput=prompt("Enter the String for let: ");
let str=letinput;
console.log(str);

const constinput=prompt("Enter the boolean value to tell if you are a human : ");
console.log(constinput)