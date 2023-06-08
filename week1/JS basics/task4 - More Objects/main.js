/* 
You’re going to console log these four options conditionally, based on the values you selected for hasOven and works:
hasOven: true and works: true
Geraldine’s raddish expired 1 day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.
hasOven: false and works: true
Geraldine’s raddish expired 1 day ago. Weird, considering her fridge works. Too bad she doesn’t have an oven to cook the raddish in.
hasOven: true and works: false
Geraldine’s raddish expired 1 day ago. Probably because her fridge doesn’t work. Luckily, she has an oven to cook the raddish in. And she’ll have to pay 250 to fix the fridge.
hasOven: false and works: false
Geraldine’s raddish expired 1 day ago. Probably because her fridge doesn’t work. Too bad she doesn’t have an oven to cook the raddish in. And she’ll have to pay 250 to fix the fridge.
Note that the expired 1 day ago should be calculated based off the date variable and expiryDate property.
Also, she’ll have to pay 250 to fix the fridge should be calculated based off the price property in fridge - it should be half the price.

*/

const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

let s="";
const foodItems=kitchen.fridge.items;
for (let i=0; i< foodItems.length; i++) {
    s+=kitchen.owner+"'s "+foodItems[i].name;
    if (foodItems[i].expiryDate>=date) {
        s+=" has not expired, hooray!";
    } else {
        s+= " has expired " + (date - foodItems[i].expiryDate) + " day(s) ago. ";
        if (kitchen.fridge.works) {
            s+= "Weird, considering her fridge works. ";
        } else {
            s+= "Probably because her fridge doesn’t work. ";
        }
        if (kitchen.hasOven) {
            s+= "Luckily, she has an oven to cook the " + foodItems[i].name + " in. "
        } else {
            s+= "Too bad she doesn’t have an oven to cook the " + foodItems[i].name + " in. "
        }
        if (!kitchen.fridge.works) {
            s+="And she’ll have to pay " + kitchen.fridge.price/2 + " to fix the fridge."
        }

    }
    s+="\n";
}
console.log(s);