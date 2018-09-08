//variables
var randomNumber = Math.floor((Math.random() * 120) + 19);
// var crystalOne
var crystalOne = Math.floor((Math.random() * 12) + 1);
// var crystalTwo
var crystalTwo = Math.floor((Math.random() * 12) + 1);
// var crystalThree
var crystalThree = Math.floor((Math.random() * 12) + 1);
// var crystalFour
var crystalFour = Math.floor((Math.random() * 12) + 1);
// each crystal should be 1-12

//score to match between 19-120
$("#$randomNumber").text(randomNumber);
alert("Match "+ randomNumber + "to win!");

//on click event for each crystal
$("#one").on("click", function() {
    alert("This crystal is worth " + crystalOne)
})

$("#two").on("click", function() {
    alert("This crystal is worth " + crystalTwo)
})

$("#three").on("click", function(){
    alert("This crystal is worth " + crystalThree)
})

$("#four").on("click", function(){
    alert("This crystal is worth " + crystalFour)
})

// function to make scores additive 

//alert with current score

// alert on win when score === random number generated at start

// alert loss if score > random number generated

// if win or loss, game resets

// win counter 

// loss counter

// when new game is generated, crystals given new values, and new random number is generated





