"use strict";

console.log("-----Exercise 1-----")

/*
And say I want to write up a basic summary of each person, but:
All proper nouns* should be capitalized
The city and country should come together with a comma in between
If the age is below 21, it should say “Underage” instead
If the age is above 55 it should say “55+” instead
The catchphrase should be wrapped in quotes with its first letter capitalized
*for this exercise, everything except age is a proper noun
*/

let people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!"
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub"
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power"
    }
]

const capitalize = function (str) {
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase() //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr;
}

const capitalizeEachWord = function (str) {
    let words = str.split(" ")
    for (let i in words) {
        words[i] = capitalize(words[i])
    }
    return words.join(" ")
}

const getAge = function (age) {
    if (age < 21) return "underage";
    if (age >= 55) return "55+";
    return age;
}

const concatViaComma = function (s1, s2) {
    return s1 + ", " + s2
}

const getCatchphrase = function (catchphrase) {
    return '"' + capitalize(catchphrase) + '"'
}

const getSummary = function (person) {
    let summary = ""
    summary += capitalizeEachWord(person.name)
    summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
    summary += capitalizeEachWord(person.profession)
    summary += ` from ${concatViaComma(capitalize(person.city), capitalize(person.country))} . `
    summary += capitalizeEachWord(person.name) + ` loves to say: ${getCatchphrase(person.catchphrase)}`
    return summary;
}

for (let person of people_info) {
    console.log(getSummary(person))
}


console.log("-----Exercise 2-----")

const story = `In the beginning there was light. Then there were wolves. 
Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, 
the fire caused one heck of a lot of damage.`
const specialChars = [",", ".", "'", '"', "?", "!", ";", "\n"]

/*
You have to write a program that counts the unique words in story, and stores them in the wordCounts object.
*/

const cleanText = function (text, charsToRemove) {
    for (let char of charsToRemove) {
        text = text.split(char).join(" ")
    }
    while (text.indexOf("  ") > -1) {
        text = text.replaceAll("  ", " ")
    }
    return text
}

const makeWordList = function(text) {
    let wordList = {}
    let words = text.split(" ")
    for (let word of words) {
        let wordLC=word.toLowerCase();
        if (wordList[wordLC]) {
            wordList[wordLC]++;
        } else {
            wordList[wordLC] = 1;
        }
    }
    return wordList
}


const printWordCount = function (text) {
    console.log(makeWordList(cleanText(text, specialChars)))
}

printWordCount(story)

