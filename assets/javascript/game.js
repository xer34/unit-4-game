//variables

// random number to win
var randomNumber = Math.floor(Math.random() * 120 + 19);
// each crystal should be 1-12
var crystalValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// score var
var score = 0;
// wins
var wins = 0;
// losses
var losses = 0;

// for loop to create four crystals
for (var i = 0; i < 4; i++) {
  var imageCrystal = $("<img>");
  var randomCrystalVal =
    crystalValue[Math.floor(Math.random() * crystalValue.length)];
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("src", "assets/images/godDamnItMarieTheyreMinerals.png");
  imageCrystal.attr("data-crystalvalue", randomCrystalVal);
  $("#crystals").append(imageCrystal);
}

//score to match between 19-120
$("#randomNumber").text(randomNumber);
alert("Match " + randomNumber + " to win!");

//on click event for each crystal
$(".crystal-image").on("click", function() {
  //set value to THIS value
  randomCrystalVal = $(this).attr("data-crystalvalue");
  // parse it
  randomCrystalVal = parseInt(randomCrystalVal);
  // udpate score
  score += randomCrystalVal;

  //alert the score
  alert("New score: " + score);

  //wins
  if (score === randomNumber) {
    alert("You win!");
    wins++;
    winsText.textContent = wins;
    score = 0;
    randomNumber = Math.floor(Math.random() * 120 + 19);
    $("#randomNumber").text(randomNumber);
  }

  //losses
  else if (score >= randomNumber) {
    alert("You died!!");
    losses++;
    lossesText.textContent = losses;
    score = 0;
    randomNumber = Math.floor(Math.random() * 120 + 19);
    $("#randomNumber").text(randomNumber);
  }

  //-----------------------------
});
