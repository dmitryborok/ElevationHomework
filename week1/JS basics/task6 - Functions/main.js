"use strict";

console.log("-----Spot Check-----")

const person = {
    name: "Julius",
    speak: function(food) {
      console.log("I like " + food)
    }
  }

person.speak("salami")


console.log("----Exercise 1-----")

/* Write a function called isEven that accepts a number as a parameter 
and checks if the number is even or not. Return true if it is even or
 false if it is odd. Don’t Google this one ;) Use modulo %
*/

const isEven = function(number) {
    return !(number % 2)
}

console.log(isEven(20));
console.log(isEven(101));



console.log("----Exercise 2-----")
/* Write a function that takes in an array of numbers.
The function should loop through the numbers and 
(using the function from console.log("----Exercise 1)
print out the odd numbers.
*/

const printOdds = function(arr) {
    for (let number of arr) {
        if(!isEven(number)) {
            console.log(number)
        }
    }
}

printOdds([2,2,5,6,2,8,19, 4, 5]);

console.log("----Exercise 3-----")
/* Write a JavaScript function that accepts two parameters: 
one being an array of integers, and the other being a number.
The function should return true or false depending on whether the number exists in the array.
checkExists([1, 2, 3], 2) - should return true
checkExists([1, 2, 3], 5) - should return false
*/

const checkExists = function(arr, numberSought) {
    for (let numberFromArray of arr) {
        if(numberFromArray == numberSought) {
            return true;
        }
    }
    return false;
}

console.log(checkExists([1, 2, 3], 2));
console.log(checkExists([1, 2, 3], 5));


console.log("----Exercise 4-----")
/* Create an object called calculator.
It should have two methods: add and subtract
Both methods take two parameters, and should return the sum/difference of both numbers.
Use this to test your code:
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42
*/

const calculator = {
    add: function(a, b) {
        return a+b;
    },
    subtract: function(a, b) {
        return a-b;
    }
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(result1 + "+" + result2 + "=" + calculator.add(result1, result2)) //should print 42

console.log("----Exercise 5-----")

/*
Complete the following code */

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

/* 
turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
*/

function makeRegal(name) {
    return "His Royal Highness, " + name
}

function increaseByNameLength(money, name) {
    return name.length*money
}

console.log(turnToKing("martin luther", 100));
console.log(turnToKing("martin luther king", 1000));


