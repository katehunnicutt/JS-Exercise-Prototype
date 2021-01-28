/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

//code
// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  

 function Person(name, age) { //person constructor with two arguments
  this.name = name;
  this.age = age;
  this.stomach = []; //initializing empty stomach array
}

Person.prototype.eat = function(edible){ //introducing .eat method. setting the amount of items stomach can intake to 10 and adding the items to the stomach with push
if(this.stomach.length < 10 ){
  this.stomach.push(edible);
}
}
Person.prototype.poop = function(){ //emptying the stomach
this.stomach = [];
}
//giving the persons a method
Person.prototype.toString = function(){
return `${this.name}, ${this.age}`;
}

//declaring new instances or people
const mason = new Person('Mason', 2);
const milo = new Person('Milo', 4);
const rosie = new Person('Rosie', 11);

console.log(mason.toString());

mason.eat('salmon');
mason.eat('steak');
mason.eat('bread');
mason.eat('kibble');


console.log(mason.stomach);

mason.poop();
console.log(mason.stomach);

mason.eat('sock');
console.log(mason.stomach);
  
  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0; //initializing
  this.odometer = 0; //initializing
}
//create new car, the new object
const car1 = new Car('mini', 37);
console.log(car1)

//giving cars the ability to be filled with gallons using .fill method. Then in the return adding gallons to tank (this.tank).
Car.prototype.fill = function(gallons){
return this.tank = this.tank + gallons

}
console.log(car1.fill(30))
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy){
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function(){
  return `${this.name} likes to play with the ${this.favoriteToy} most.`
}
const ethan = new Person('Ethan', 22);
const percy = new Baby('Percy',1,'Teddy Bear');

percy.play();
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. The first principle is window binding and it isn't best practice. Essentially window binding is the global default, and will return whats already in the browsers global window. strict mode, cancels this out and you'll be left with undefined.
    2. Implicit Binding is the next principle and is also the most commonly used. It is used within methods and applies when a function is called. The implicite binding refers to it being applied to whatever object is left of the dot.
    3. New binding is the next binding, and applies to constructor functions. The this is referring to the new object that is created when the constructor function is invoked and returned.
    4. Explicit binding is the last principle and is also used in constructor functions.It uses .call and .apply to bind.
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}