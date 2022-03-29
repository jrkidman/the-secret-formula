// Part 1 ___________________________________________________________________
let inputText = document.querySelector("#userInput");
let form = document.querySelector("form");
let formOne = document.querySelector("#submitOne")

formOne.addEventListener("click", function () {
    alert(inputText.value);
})


// Part 2 ___________________________________________________________________
// Radio buttons
let white = document.querySelector("#white");
let wheat = document.querySelector("#wheat");
let sourdough = document.querySelector("#sourdough");
let gf = document.querySelector("#gluten-free");

// Checkboxes
let turkey = document.querySelector("#turkey");
let ham = document.querySelector("#ham");
let roastBeef = document.querySelector("#roast-beef");
let cheddar = document.querySelector("#cheddar");
let swiss = document.querySelector("#swiss");
let muenster = document.querySelector("#muenster");
let mayo = document.querySelector("#mayo");
let mustard = document.querySelector("#mustard");
let lettuce = document.querySelector("#lettuce");
let sprouts = document.querySelector("#sprouts");
let tomato = document.querySelector("#tomato");
let peppers = document.querySelector("#peppers");
let oilVinegar = document.querySelector("#oil-vinegar");
let formTwo = document.querySelector("#submitTwo");

formTwo.addEventListener("click", function (event) {
    event.preventDefault();
    let breadChoice = "";
    if (white.checked === true) {
        breadChoice = "white bread";
    }
    if (wheat.checked === true) {
        breadChoice = "wheat bread";
    }
    if (sourdough.checked === true) {
        breadChoice = "sourdough bread";
    }
    if (gf.checked === true) {
        breadChoice = "gluten-free bread";
    }

    let sandwich = "Your sandwich contains: " + breadChoice + " ";

    if (turkey.checked === true) {
        sandwich += "turkey ";
    }
    if (ham.checked === true) {
        sandwich += "ham ";
    }
    if (roastBeef.checked === true) {
        sandwich += "roast beef ";
    }
    if (cheddar.checked === true) {
        sandwich += "cheddar ";
    }
    if (swiss.checked === true) {
        sandwich += "swiss ";
    }
    if (muenster.checked === true) {
        sandwich += "muenster ";
    }
    if (mayo.checked === true) {
        sandwich += "mayonnaise ";
    }
    if (mustard.checked === true) {
        sandwich += "mustard ";
    }
    if (lettuce.checked === true) {
        sandwich += "lettuce ";
    }
    if (sprouts.checked === true) {
        sandwich += "sprouts ";
    }
    if (tomato.checked === true) {
        sandwich += "tomato ";
    }
    if (peppers.checked === true) {
        sandwich += "peppers ";
    }
    if (oilVinegar.checked === true) {
        sandwich += "oil & vinegar ";
    }
    alert(sandwich);
    white.checked = true;
    turkey.checked = false;
    ham.checked = false;
    roastBeef.checked = false;
    cheddar.checked = false;
    swiss.checked = false;
    muenster.checked = false;
    mayo.checked = false;
    mustard.checked = false;
    lettuce.checked = false;
    sprouts.checked = false;
    tomato.checked = false;
    peppers.checked = false;
    oilVinegar.checked = false;
})

// Part 3 ___________________________________________________________________
let date = document.querySelector("#date");
let stylist = document.querySelector("#stylist-choice");
let longHair = document.querySelector("#long");
let shortHair = document.querySelector("#short");
let formThree = document.querySelector("#submitThree");

formThree.addEventListener("click", function (event) {
    event.preventDefault();
    let appointment = "You've succesfully made an appointment on " + date.value + " with " + stylist.value + " for ";

    if (longHair.checked === true) {
        appointment += "long hair."
    }
    if (shortHair.checked === true) {
        appointment += "short hair."
    }
    alert(appointment);
})

// Part 4 ___________________________________________________________________

let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let passOne = document.querySelector("#passOne");
let passTwo = document.querySelector("#passTwo");
let formFour = document.querySelector("#submitFour");


formFour.addEventListener("click", function(event){
    event.preventDefault;
    let createdContact = "Your username is: " + userName.value + " and the email associated with your username is: " + email.value + ".";

    if(passOne.value === passTwo.value){
    alert(createdContact);
    }
    else{
        alert("Passwords did not match, please try again.")
    }
})





