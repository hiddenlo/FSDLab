// Import prompt-sync
const prompt = require('prompt-sync')();

function calculator(operand1,operand2,operation)
{
    switch(operation)
    {
        case '+': return operand1 + operand2;
        case '-': return operand1 - operand2;
        case '*': return operand1*operand2;
        case '/': if(operand2 === 0)
                    return "Error: Division by zero is not allowed.";
                  else  
                    return operand1/operand2;
        default: return "Error: Invalid operation.";
    }
}

var operand1=parseFloat(prompt("Enter the first number: "));
var operand2=parseFloat(prompt("Enter the second number: "));
var operation=prompt("Enter the operation to be performed: ");

console.log(`The result of the operation ${operation} on ${operand1} and ${operand2} is: `,calculator(operand1,operand2,operation));