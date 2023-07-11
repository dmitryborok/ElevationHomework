var options = { style: 'currency', currency: 'USD' };
var numberFormat = new Intl.NumberFormat('en-US', options);

console.log("---------Spot check 2------------")
class Human {
  constructor(name, age, isFriendly) {
    this.name = name;
    this.age = age;
    this.isFriendly = isFriendly;
  }
} 

let Jane = new Human("Jane", "20", false)
console.log(`${Jane.name} is ${Jane.age} yo and she is ${Jane.isFriendly ? "" : "not "}friendly`)

console.log("---------Spot check 4, 5, 6------------")
class Vehicle {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    Vehicle.carsSold++;
  }

  set fuel(fuel) {
    if ((fuel < 0) || (fuel > 150)) {
       console.log("Fuel out of limits")
    } else {
       this._fuel = fuel;
    }
  }

  get fuel() {
    return this._fuel;
  }

  static getInfo() {
    console.log("We've sold " + Vehicle.carsSold + " vehicles.");
  }

  static calculateMoney() {
    console.log("We've earned " + numberFormat.format(Vehicle.carsSold * 30000));
  }
} 

Vehicle.carsSold = 0;

let v1 = new Vehicle(15, 90, 200);
let v2 = new Vehicle(30, 60, 400);
Vehicle.getInfo();
Vehicle.calculateMoney();
v2.fuel = 200;
v1.fuel = 100;

console.log("---------Exercise 1, (functions modified for 3)------------")

