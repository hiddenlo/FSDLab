// Import prompt-sync
const prompt = require('prompt-sync')();

function Person(name,age)
{
    this.name=name;
    this.age=age;
    this.info=function()
    {
        return `Name: ${this.name}, Age: ${this.age}`;
    };
}

//student inheriting person constructor
function Student(name,age,grade)
{
    Person.call(this,name,age);
    this.grade=grade;
    this.getGrade=function()
    {
        return `${this.name} is studying for ${this.grade}`;
    };
}

Student.prototype = Object.create(Person.prototype);

var student = new Student("Shravya","20","S");
console.log(student.info());
console.log(student.getGrade());