//variables
// each crystal should be 1-12
var randomNumber = Math.floor((Math.random() * 120) + 19);
// var crystalOne
var crystalOne = Math.floor((Math.random() * 12) + 1);
// var crystalTwo
var crystalTwo = Math.floor((Math.random() * 12) + 1);
// var crystalThree
var crystalThree = Math.floor((Math.random() * 12) + 1);
// var crystalFour
var crystalFour = Math.floor((Math.random() * 12) + 1);
// score var
var score = 0;
//has the first crystal been clicked?
var firstCrystal = false;

//score to match between 19-120
$("#$randomNumber").html(randomNumber);
alert("Match "+ randomNumber + "to win!");

//on click event for each crystal
$("#crystalImage").on("click", function() {
    if (firstCrystal) {
        score === this.val();
    }
    else {
        score += this.val();
    }
    })

// recognizes the first click, adds it to the blank string


// function to make scores additive 

//alert with current score

// alert on win when score === random number generated at start

// alert loss if score > random number generated

// if win or loss, game resets

// win counter 

// loss counter

// when new game is generated, crystals given new values, and new random number is generated





