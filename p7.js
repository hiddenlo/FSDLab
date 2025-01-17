// Import prompt-sync
const prompt = require('prompt-sync')();

const car = {
    make : prompt("Enter the make of the car : "),
    model : prompt("Enter the model of the car : "),
    year : parseInt(prompt("Enter the year of the car : ")),
    getDetails()
    {
        return `This is a ${this.make} make in the year ${this.year} and the model is ${this.model}.`
    }
}

const electricCar = Object.create(car);
electricCar.batteryCapacity=parseInt(prompt("Enter the battery capacity of the car :"));
electricCar.getBatteryCapacity=function()
{
    return this.batteryCapacity;
}

var newcar = Object.create(electricCar);
console.log("Car Details are: ",newcar.getDetails());
console.log("The battery capacity of the car is ",newcar.getBatteryCapacity());