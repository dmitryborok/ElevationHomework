const validator = require('validator');
const {faker} = require('@faker-js/faker');

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
{
const s = "shoobert@dylan";
console.log(s + (validator.isEmail(s) ? " is a valid email" : " is not a valid email"));  
}

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
{
const s = "786-329-9958";
console.log(s + (validator.isMobilePhone(s, ['en-US']) ? " is a valid US phone" : " is not a valid US phone"));  
}

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
console.log(validator.blacklist(text, blacklist).toLowerCase());  

function createRandomUser() {
    return {
      avatar: faker.image.avatar(),
      name: faker.person.firstName(),
      company: faker.company.name()
    };
  }

function logMultipleUsers(num) {
    for (let i=0; i < num; i++) {
        console.log(createRandomUser());
    }
}

logMultipleUsers(2);
  