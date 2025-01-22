// Import prompt-sync
const prompt = require('prompt-sync')();

const temperatureConverter =
{
    toCelsius(fahrenheit)
    {
        return (fahrenheit-32)*5/9;
    },
    toFahrenheit(celsius)
    {
        return (celsius*9/5)+32;
    }
}

let celsius=parseFloat(prompt("Enter the celsius temperature : "));
console.log("the temperature converted from celsius to fahrenheit is : ",temperatureConverter.toFahrenheit(celsius));

let fahrenheit=parseFloat(prompt("Enter the fahrenheit temperature : "));
console.log("the temperature converted from fahrenheit to celsius is : ",temperatureConverter.toCelsius(fahrenheit));