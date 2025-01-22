// Import prompt-sync
const prompt = require('prompt-sync')();

class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
    area() {
        return this.width * this.height;
    }
}

let w = parseInt(prompt("Enter width: "));
let h = parseInt(prompt("Enter height: "));
let rect = new Rectangle(w, h);
console.log(rect.area());
