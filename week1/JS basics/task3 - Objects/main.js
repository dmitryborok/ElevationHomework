
let p1 = {
    name: "Miri",
    age: 19,
    city: "Haifa"
}

let p2 = {
    name: "Ariel",
    age: 19,
    city: "Tel Aviv"
}

console.log("------Exercise 1------");

if (p1.age===p2.age) {
    if (p1.city===p2.city) {
        console.log(p1.name + " wanted to date " + p2.name);
    } else {
        console.log(p1.name + " wanted to date " + p2.name + " but couldn't");
    }
}

console.log("------Exercise 2------");
let library = {
    books: [{title: "Gulliver's Travels", author: "Daniel Defoe"}, 
            {title: "The Lord of the Rings", author: "JRR Tolkien"}, 
            {title: "Little Red Riding Hood", author: "Charles Perrault"}]
}

console.log(library);

console.log("------Exercises 3, 3.1, 3.2------");

const reservations = {
  bob: { claimed: false },
  ted: { claimed: true }
}

const yourname = prompt('Please enter the name for your reservation');
const yournameLC = yourname.toLowerCase();
if (reservations[yournameLC]){
    if (reservations[yournameLC].claimed) {
        alert("Sorry, it seems " + yourname + "'s reservation has already been claimed");
    } else {
        alert("Welcome " + yourname);
    }
} else {
    // alert("Sorry, it seems there is no reservation for the name " + yourname)
    reservations[yournameLC]={claimed: true}; // adding the new customer to reservations
    alert("Welcome, new customer " + yourname);
    console.log(reservations);
};
