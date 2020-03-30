var dice = [];
var diceRoll;
var isYahtzee = false;
var attempts = 0;
var temp = 1;
var numberOfSides = 6;

while (!isYahtzee){
  for (var i = 0; i < 5; i++) { // Generates 5 random numbers from 1-6
    diceRoll = Math.floor((Math.random() * numberOfSides) + 1);
    dice[i] = diceRoll;
  }
  // console.log(dice);

  for (var j = 1; j <= 5; j++) {
    if (dice[j-1] === dice[j]) { // Checks each item in the array to see if it matches the previous item
      temp++;
    } else {
      temp = 0;
      break;
    }
    if (temp === 4) {
      console.log('Yahtzee!!');
      isYahtzee = true;
    }
  }
  attempts++;
}
console.log('You rolled five ' + dice[0] + 's in ' + attempts + ' attempts');