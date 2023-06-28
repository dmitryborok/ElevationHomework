"use strict";

// -----------Exercise 1, 2-------------

$("body").append($(`<input type="text" id="new-name" placeholder=""Human Name>`));
$("body").append($(`<button id="btn-add">Add Human</button>`));
$("#btn-add").on("click", function() {
    $("#names").append(`<li>${$("#new-name").val()}</li>`)
    })

$("#names").on("click", "li", function() {
    $(this).remove();
})

// -----------Exercise 3-------------


$("body").append($("<div id='box-container'></>")) 
$("#box-container").append($("<div class='box'></>")) 
$("#box-container").append($("<div class='box'></>")) 

$(".box").on("mouseenter", function() {
    $(this).css("background-color", "#8e44ad");
    $(this).siblings().css("background-color", "red");
})

$(".box").on("mouseleave", function() {
    $(this).siblings().css("background-color", "#8e44ad");
})

// -----------Exercise 4-------------
$(".item").on("click", function() {
    if ($(this).data().instock === false) return;
    $("#cart").append(`<div>${$(this).text()}</div>`)
})


// -----------Exercise 5-------------

const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]

fruits.forEach(function(item) {
    $("#basket").append($(`<div class="${item.color}">${item.name}</div>`));
})

// $("h1").css("color", "blue");
// $("div.red-div").css("background-color", "red");
// $("ul > li:first-child").css("color", "green");
// $("ul > li:last-child").css("color", "pink");
// $("div#brown-div").css("color", "brown");

// $("#b1").addClass("box");
// $("#b2").addClass("box");

// $("#my-input").val("Terabyte");

// console.log("The item with barcode " + $("#product").data().barcode + " will expire on " + $("#product").data().expirationdate); 

// $("#hover-blue").on("mouseenter", () => $("#hover-blue").css("background-color", "blue"));
// $("#hover-blue").on("mouseleave", () => $("#hover-blue").css("background-color", "white"));

// $("#btn-showmyinput").on("click", () => alert($("#my-newinput").val()));

// $("#b1").hover(function () {
//     console.log(this, typeof this)
//     console.log($(this))
// })

// $(".box").hover(function() {
//     // $(this).css("background-color", "blue");
//     $(this).remove()
//     });

// $(".feedme").on("click", function(){
//     let divCopy = $(this.outerHTML)//use template literals and $(this)
    
//     $("body").append(divCopy)
//   })
  
//   const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]
  
//   names.forEach((item) => $("body").append($(`<div>${item.first} - ${item.last}</div>`)))

// $("#post-blog").on("click", function() {
//     $("#blogs").append($(`<div class="blog">Wow</div>`))
//     $(".blog").on("click", function() {
//         $(this).text("blargh");
//     });
// });


