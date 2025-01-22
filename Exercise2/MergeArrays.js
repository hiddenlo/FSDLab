function merge(...arrays) 
{
  return [].concat(...arrays);
}

console.log(merge([1,2],[3,4],[5,6]));
/*
// Import prompt-sync
const prompt = require('prompt-sync')();

function merge(...arrays) 
{
  return [].concat(...arrays);
}

// Function to read an array from user input
function ArrayInput() 
{
  const input = prompt("Enter numbers separated by spaces: ");
  return input.split(' ').map(num => parseInt(num)); 
}

const n = parseInt(prompt("How many arrays would you like to merge? "));

let userArrays = [];
for (let i = 0; i < n; i++) {
  userArrays.push(ArrayInput());
}

// Merge the arrays using the mergeArrays function
const mergedArray = merge(...userArrays);

console.log("Merged Array:", merge); */
