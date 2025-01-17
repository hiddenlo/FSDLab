function Person(name) 
{
    this.name = name;
}
  
Person.prototype.greet = function() 
{
    console.log(`Hello, my name is ${this.name}`);
};
  
var person1 = new Person("Shravya");
console.log(person1.__proto__ === Person.prototype);
person1.__proto__.greet(); //as using this,info is lost or becomes undefined
person1.__proto__.greet.call(person1);

//__proto__ points to the prototype of the constructor that created the object
  