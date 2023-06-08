/* 
Write a loop that populates (adds to) the people array with objects, that have a name and age, like this:
{name: "Ashley", age: 23}
*/

console.log("-----Exercise 1-----")

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i=0; i<names.length; i++){
    people.push({name: names[i], age: ages[i]})
}
console.log(people);


/*
Based off the people array from before, write a loop that prints out "Ashley is 23 years old", "Donovan is 47 years old", etc.
*/
console.log("-----Exercise 2-----")

for (let person of people) {
    console.log(person.name + " is "+ person.age+ " years old.")
}

/*
Write some code that removes the post with an id of 2 from the posts array. Can’t have any negative reviews of our product!
*/
console.log("-----Exercise 3-----")

{
    const posts = [
        {id: 1, text: "Love this product"},
        {id: 2, text: "This is the worst. DON'T BUY!"},
        {id: 3, text: "So glad I found this. Bought four already!"}
    ]
    let indexFound = -1;

    for (let i=0; i<posts.length; i++) {
        if (posts[i].id===2) {
            indexFound = i;
        }
    }
    if (indexFound >= 0) {
        posts.splice(indexFound, 1);
        console.log(posts);
    } else {
        console.log("No such ID in posts");
    }
}

/*
You are given 2 as the ID of a post. Write some code that finds the comment with an ID of 3 (inside of a post with an ID of 2), and remove just that one comment.

*/
console.log("-----Exercise 4-----")

{
    const posts = [
        {
            id: 1, 
            text: "Love this product",
            comments: []
        },
        { 
            id: 2, 
            text: "This is the worst. DON'T BUY!", 
            comments: [
                        {id: 1, text: "Idiot has no idea"}, 
                        {id: 2, text:"Fool!"}, 
                        {id: 3, text: "I agree!"}
                    ]
            },
            {
            id: 3, 
            text: "So glad I found this. Bought four already!",
            comments: []
            }
        ]
        
    let idTopLevelToFind=2;
    let idSecondLevelToFind=3;

    let indexTopLevelFound = -1;
    let indexSecondLevelFound = -1;

    for (let i=0; i<posts.length; i++) {
        if (posts[i].id===idTopLevelToFind) {
            indexTopLevelFound = i;
        }
    }
    if (indexTopLevelFound >= 0) {
        for (let i=0; i<posts[indexTopLevelFound].comments.length; i++) {
            if (posts[indexTopLevelFound].comments[i].id == idSecondLevelToFind) {
                indexSecondLevelFound=i;
            }
        }
        if  (indexSecondLevelFound >= 0) {
            posts[indexTopLevelFound].comments.splice(indexSecondLevelFound, 1);
            console.log(posts);
        } else {
            console.log("No such ID in comment to post with id = " + indexTopLevelFound);    
        }
    } else {
        console.log("No such ID in posts");
    }
        
}

/*Write some code that prints out the following:
Words that begin with  A:
Words that begin with  B:
etc.
*/

console.log("-----Extension-----")


{
    const dictionary = {
        "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
        "B": ["Banana", "Bonkers", "Brain", "Bump"],
        "C": ["Callous", "Chain", "Coil", "Czech"]
      }

     for (key of Object.keys(dictionary)) {
        console.log("Words that begin with " + key);
        for (word of dictionary[key]) {
            console.log("   " + word);
        }
     } 
}

