
function main() {
    if (boughtTesla && isUSCitizen) {
        if (currentYear-yearOfTeslaPurchase >= 4) {
            console.log("Would you like an upgrade?");
        } else {
            console.log("Are you satisfied with the car?");
        }
    } else if (!isUSCitizen && boughtTesla) {
        console.log("Would you like to move to US?");
    } else if (!boughtTesla) {
        console.log("Would you consider buying a Tesla?");
    }
}

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

main();

boughtTesla = false
isUSCitizen = true
currentYear = 2018

main();

boughtTesla = true
isUSCitizen = false;
currentYear = 2018

main();

boughtTesla = true
isUSCitizen = true
currentYear = 2015

main();

    