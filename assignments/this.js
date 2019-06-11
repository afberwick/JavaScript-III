/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
Is the function called by new?
Is the function called by call(), apply(), or bind()?
Is the function called as a method, ie: obj.func()?
Is the function called in the global scope?

If strict mode is enabled, return undefined.
Otherwise, return the global object, ie: window.
*
* write out a code example of each explanation above
*/

// Principle 1

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Scott");


// Principle 2

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');

// Principle 3

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

// Principle 4

function Person(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
    this.speak = function () {
      return `Hello, my name is ${this.name}`;
    };
  }