// Import prompt-sync
const prompt = require('prompt-sync')();

function Student(name,grade)
{
    this.name=name;
    this.grade=grade;
    this.study=function()
    {
        console.log(`Yes, I am ${this.name} and I am studying`);
    };
    this.getGrade=function()
    {
        return this.grade;
    };
}

//creating instances
let student1 = new Student("Shravya","S");
student1.study();
console.log(`My grade is `,student1.getGrade());
let student2 = new Student("Adarapu","A+");
student2.study();
console.log(`My grade is `,student2.getGrade());
