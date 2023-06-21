console.log ("-----Exercise 1-----");

// Write a function pushPull that takes one argument - a function - and invokes that function:

const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

const pushPull = function(func) {
    func();
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

console.log ("-----Exercise 2-----");
// You can get the current date/time in Javascript by writing: const time = new Date().
// Create a function called getTime that takes one parameter - a function - then calls it with an argument.

const getTime = function(func) {
    func(new Date());
}

const returnTime = function (time) {
    console.log('The current time is: ' + time)
  }
  
getTime(returnTime)
  
console.log ("-----Exercise 3-----");
// Given the following code, what error do you get? Write the missing part to make the code work:

const logData = data => console.log(data);
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(alert, logData, "I like to party")

console.log ("-----Exercise 4-----");
// Create an arrow function that receives three parameters and returns their sum - it should be one line.

const sum3 = (a, b, c) => a + b + c;
console.log(sum3(4, 6, 11)); // 21

console.log ("-----Exercise 5-----");
// Create an arrow function called capitalize that receives any string, and returns it with proper capitalization:

const capitalize = (s) => s[0].toUpperCase() + s.slice(1).toLowerCase();
console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia


console.log ("-----Exercise 6-----");

const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}

// Create a one-line arrow function called commentOnWeather that takes one parameter, temp.
// It should call determineWeather and return the concatenation of "It’s " and determineWeather’s output:

const commentOnWeather = temp => "It's " + determineWeather(temp); 
commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"

console.log ("-----Exercise 7-----");
// Study the code in the image above, think about what you expect to happen, 
// and then complete the HTML to make the code work.

const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
    
const makeSound = sound => alert(sound)
    
explode(shineLight, makeSound, "BOOM")
  
console.log ("-----Try to make an anonymous function which is not called as callback-----");

(() => console.log("Wow, it works"))();