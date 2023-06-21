{
  console.log ("-----Exercise 1-----");

// Create several Regex’s that can validate the following:
// Checks if it contains “a” in the string
// Checks if it’s a string that ends with “at”
// Checks if it’s a number that starts with 054 and of size 10.
// Here is some code to test your answers:

const str = "the fat cat hit the rat with a bat"
const str1 ="bob yelled hello"
const str2 = "it's fleece was white as snow";
const str3 = "0542212222";
const str4 = "054hihihii";
const str5 = "9542212222";

//Checks if it contains “a” in the string
const checkIfContainsA = function (str){
  /**
   * should return true if string contains a
   */
  return /a/i.test(str);
}

//Checks if it’s a string that ends with “at”
const checkIfEndsWithAt = function(str){
  /**
   * should return true if a string ending with at exsists in string
   * HINT : look into $
   */
  return /at$/.test(str);

}
//Checks if it’s a number that starts with 054 and of size 10.
const checkIfStartsWithNum = function(str){
  /**
   * should return true if string is all numbers / size 10 / starts with 054
   * HINT : look into ^ , into Ranges [] and sizes {}
   */
  return !(/\D/.test(str)) && (str.length === 10) && (/^054/.test(str));

}

console.log(checkIfContainsA(str)) //returns true
console.log(checkIfContainsA(str1)) //returns false

console.log(checkIfEndsWithAt(str)) //returns true
console.log(checkIfEndsWithAt(str1)) //returns false
console.log(checkIfEndsWithAt(str2)) //returns false

console.log(checkIfStartsWithNum(str)) //returns false
console.log(checkIfStartsWithNum(str3)) //return true
console.log(checkIfStartsWithNum(str4)) //return false
console.log(checkIfStartsWithNum(str5)) //return false

}
{
console.log ("-----Exercise 2-----");

// Create a function SearchMatchingRegex(string) that will look through an array of Regex’s for a matching Regex for the string. 
// It will return true if it found a matching Regex or false if it failed to.
// Example:
// regexArr = [/at/,/a/,/a$/,^b]

// SearchMatchingRegex(‘cat’) //will return true
// SearchMatchingRegex(‘bike’) //will return true
// SearchMatchingRegex(‘mouse’) //will return false 

const regexArr = [/a/, /b/, /^d/, /e$/]
const str = "Bike"
const str1 = "the room is on fire"
const str2 = "Fergalicious"
const str3 = "Fox in sheep clothing"
const searchMatchingRegex = function (str) {
  /**
   * should return true if one match is found with the array
   */
  let initialValue = false;
  return regexArr.reduce((currentValue, item) => item.test(str) || currentValue, initialValue);
}

console.log(searchMatchingRegex(str)) //return true (contains b)
console.log(searchMatchingRegex(str1)) //return true (ends with e)
console.log(searchMatchingRegex(str2)) //return true (contains a)
console.log(searchMatchingRegex(str3)) //return false
}


console.log ("-----Exercise 3-----");

// Create a validator function that will check if the given String is an email.
// Assumptions:
// All emails will end in .com
// Email may contain only letters

const email1 = "cat@meow.com"
const email2 = "bad1npuT!@gmail.com"
const email3 = "meow@gmail.net"

const emailValidator = function(str){
  return /[A-z]/.test(str) && /.com$/.test(str);
}

console.log(emailValidator(email1)) //return true
console.log(emailValidator(email2)) //return true
console.log(emailValidator(email3)) //return false


console.log ("-----Exercise 4-----");

// Create a validator function that will check if the given String is a URL. Assumptions:
// All URL’s Start with www.
// All URL’s End with .com
// Example:
// urlValidator(“www.elevation.com”) // will return True
// urlValidator(“www.elevation.ac.il” // will return false
// urlValidator(“elevation.com”) // will return false
// Here is some code to test your answers:

const firstURL = "www.workingurl.com"
const secondURL = "iamabadurl.com"
const thirdURL = "www.doireallywork.net"

const urlValidator = function(str){
  /**
   * returns true if URL starts with www. , the URL must end in .com
   * HINT : doesnt have to be a big regex expression use the methods from RegExp
   */
  return /^www./.test(str) && /.com$/.test(str)
}

console.log(urlValidator(firstURL)) //return true
console.log(urlValidator(secondURL)) //return false
console.log(urlValidator(thirdURL)) //return false

