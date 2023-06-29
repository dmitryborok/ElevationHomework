"use strict";

// -----------Spot Check 1-------------

// write some code that prints the text inside the correct span element when the relevant Print button is clicked:

$("button.spotcheck1").on("click", function() {
    $(this).closest("div").find("span").text(" but I can speak");
    })

// -----------Spot Check 2-------------

// When you click the button, “Find me” should be printed:
$("button.spotcheck2").on("click", function() {
    console.log($("body").find(".container").find("p").text());
    })


// -----------Exercise-------------

// When the generator button is clicked, you should console log 
// the following values for its computer:
// The processor ID
// The computer’s data-id - also, push this to an array in an object like this: 
// {cmp_id: id}
// The BUS number
// When the validator button is clicked, you should console log
// the following values for its computer:
// The generator’s text
// The MB
// Both QRs
// For example, when you click on the Phomer generator, you should log the following:
// Processor ID: L2A-HW33
// Computer’s data-id: H22V-Y633
// BUS: EZ1-5534
$(".generator").on("click", function() {
    console.log("Processor ID: ", $(this).closest(".processor").attr("id"));
    console.log("Computer's data-id: ", $(this).closest(".computer").data("id"));
    console.log("BUS: ", $(this).closest(".computer").find(".BUS").text());

})

$(".validator").on("click", function() {
    console.log("Generator: ", $(this).closest(".computer").find(".generator").text());
    console.log("MB: ", $(this).closest(".computer").find(".MB").text());
    for (let QR of $(this).closest(".computer").find(".QR"))
        console.log("QR: ", QR.innerHTML);

})