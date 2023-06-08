// Exercise 1

const person = {
    hungry: true,

    feed: function () {
        if (this.hungry) {
            this.hungry = false;
            alert("I'm no longer hungry!")
        }
    }
}

person.feed() //should alert "I'm no longer hungry"

// Exercise 2

const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
};

const garage = {
    car1: {
        name: 'Audi',
        liters: 3,
        fillTank: pump
    },
    car2: {
        name: 'Mercedes',
        liters: 1,
        fillTank: pump
    }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ', garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);

//  Exercise 3
// There are 2 errors to fix here:

const pumpFuel = function (plane) {
    plane.fuel += 1;
};

const airplane = {
    fuel: 0,
    fly: function () {
        if (this.fuel < 2) {
            return 'on the ground!';
        }
        else {
            return 'flying!';
        }
    }
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());


// Exercise 4
// Create a method called stealCoins that takes a number parameter 
// and decreases the tipJar’s coins by that amount:

const tipJar = {
    coinCount: 20,
    tip: function () {
        this.coinCount += 1;
    },
    stealCoins: function (amountStolen) {
        this.coinCount -= amountStolen;
    }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

// Exercise 5
// Aside from the usual, this code also has 3 syntax errors.Fix everything:

const revealSecret = function () {
    return this.secret;
};

const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    console.log(person.name + " said: " + result);
};

const avi = {
  name: "Avi", 
  secret: "Im scared of snakes!"
};

const narkis = {
  name: "Narkis",
  secret: "I dont have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);


// Exercise 6
// Add the following code to some main.js file

// Read over it, then complete the makeDrink method so that it:
// Only allows you make a drink if it’s a drink in the drinkRequirements object. Otherwise alert: "Sorry, we don’t make "
// Reduces the beans count according to the drinkRequirements object and the given drinkType
// Alerts “Sorry, we’re all out of beans!” if there are not enough beans to make that drink

// Extension 1
// Now give the coffeeShop a money property and the ability to buy more beans with a buyBeans method.
// The method should take one parameter - numBeans, and should reduce the amount of money depending on numBeans.
// You decide how much the beans cost ~

{
const coffeeShop = {
    beans: 40,

    money: 120,

    beanPrice: 2,

    drinkRequirements: {
        latte: 10,
        americano: 5,
        doubleShot: 15,
        frenchPress: 12
    },

    makeDrink: function (drinkType) {
        if (!this.drinkRequirements[drinkType]) {
            console.log(`Sorry, we don’t make ${drinkType}`);
            return;
        }
        if (this.drinkRequirements[drinkType] > this.beans) {
            console.log(`Sorry, we are out of beans for ${drinkType}`);
            return;
        }
        this.beans -= this.drinkRequirements[drinkType];
    },

    buyBeans: function(numBeans) {
        if (this.money >= numBeans * this.beanPrice ) {
            this.money -= numBeans * this.beanPrice;
            this.beans += numBeans;
        } else {
            console.log (`Not enough money for ${numBeans} beans` );
        }
    } 
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(30);
console.log(`Now we have ${coffeeShop.beans} beans`);
coffeeShop.buyBeans(50);

}

// Extension 2
// This is a business! We need more money to buy more beans!
// Change the drinkRequirements object so that instead of latte: 10, it looks like this
// latte: {beanRequirement: 10, price: 5} - for each drink
// Create a buyDrink method that accepts 1 parameter: drinkType. The method should:
// Increase money depending on the price of drinkType
// Call the makeDrink method

{
    const coffeeShop = {
        beans: 40,
    
        money: 120,
    
        beanPrice: 2,
    
        drinks: {
            latte: {beanRequirement: 10, price: 5},
            americano: {beanRequirement: 5, price: 3},
            doubleShot: {beanRequirement: 15, price: 8},
            frenchPress: {beanRequirement: 12, price: 7},
        },
    
        makeDrink: function (drinkType) {
            if (!this.drinks[drinkType]) {
                console.log(`Sorry, we don’t make ${drinkType}`);
                return false;
            }
            if (this.drinks[drinkType].beanRequirement > this.beans) {
                console.log(`Sorry, we are out of beans for ${drinkType}`);
                return false;
            }
            this.beans -= this.drinks[drinkType].beanRequirement;
            return true;
        },
    
        buyBeans: function(numBeans) {
            if (this.money >= numBeans * this.beanPrice ) {
                this.money -= numBeans * this.beanPrice;
                this.beans += numBeans;
            } else {
                console.log (`Not enough money for ${numBeans} beans` );
            }
        },

        buyDrink: function(drinkType) {
            if (this.makeDrink(drinkType)) {
                this.money += this.drinks[drinkType].price;
                console.log(`Successfully made ${drinkType} for ${this.drinks[drinkType].price}, 
                    rest: beans ${this.beans}, money ${this.money}`);
            }
        }
    }
    
    coffeeShop.buyDrink("latte");
    coffeeShop.buyDrink("americano");
    coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
    coffeeShop.buyDrink("doubleShot");
    coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

    coffeeShop.buyBeans(40);
    coffeeShop.buyDrink("frenchPress");


}
    