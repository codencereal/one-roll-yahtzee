let manualRoll = sessionStorage.getItem('manualRoll') == 'true';
let allRolls = sessionStorage.getItem('allRolls') == 'true';
let returnToTop = document.createElement("h2");
let a = document.createElement("a");
returnToTop.id = "return-to-top";
a.href = "#attempts";
a.textContent = "Click here to return to the top";
returnToTop.appendChild(a);

function autoYahtzee() {
  let dice = [];
  let isYahtzee = false;
  let attempts = 0;
  let temp = 1;
  let numberOfSides = 6;
  let attemptsText = document.getElementById("attempts");

  while (!isYahtzee){
      rollDice(dice, numberOfSides, 5)

    for (let i = 1; i < 5; i++) {
      if (dice[i-1] === dice[i]) { // Checks each item in the array to see if it matches the previous item
        temp++;
      } else {
        temp = 0;
        createRoll(dice, false);
        break;
      }
      if (temp === 4) {
        console.log('Yahtzee!!');
        createRoll(dice, true);
        isYahtzee = true;
      }
    }
    attempts++;
  }
  attemptsText.textContent = 'You rolled five ' + dice[0] + 's in ' + attempts + ' attempts';
  console.log('You rolled five ' + dice[0] + 's in ' + attempts + ' attempts');
}

function manualYahtzee() {
  let dice = [];
  let isYahtzee = false;
  let attempts = 0;
  let temp = 1;
  let numberOfSides = 6;
  let startBtn = document.getElementById("start-btn");
  startBtn.textContent = "Roll";

  rollDice(dice, numberOfSides, 5);

  for (let i = 1; i < 5; i++) {
    if (dice[i-1] === dice[i]) { // Checks each item in the array to see if it matches the previous item
      temp++;
    } else {
      temp = 0;
      updateDice(dice);
      break;
    }
    if (temp === 4) {
      console.log('Yahtzee!!');
      updateDice(dice);
      isYahtzee = true;
    }
  }
}

function createRoll(rolledDice, isWinningRoll) {
  let outerDiv = document.createElement("div");
  let innerDiv = document.createElement("div");
  let dice = document.createElement("div");
  let rolls = document.createElement("div");
  let p = document.createElement("p");
  let dieArray = [];

  outerDiv.className = "outer-container";
  if (isWinningRoll)
    outerDiv.id = "winning-roll";
  innerDiv.className = "inner-container";
  dice.className = "dice";
  rolls.className = "rolls";

  for (let i = 0; i < rolledDice.length; i++) {
    dieArray.push(document.createElement("img"));
    dieArray[i].className = "die";
    dieArray[i].src = "../img/dice-" + rolledDice[i] + ".png";
    p.textContent += rolledDice[i].toString() + ((i !== rolledDice.length-1) ? ", " : "");
  }

  rolls.appendChild(p);

  for (let i = 0; i < 5; i++)
    dice.appendChild(dieArray[i]);
  
  innerDiv.appendChild(dice);
  innerDiv.appendChild(rolls);
  outerDiv.appendChild(innerDiv);
  document.body.appendChild(outerDiv);
  if (isWinningRoll)
    document.body.appendChild(returnToTop);
}

function updateDice(rolledDice) {
  for (let i = 1; i < 6; i++) {
    let die = document.getElementById('die-' + i.toString());
    die.src = "../img/dice-" + rolledDice[i-1] + ".png";
  }
}

function rollDice(dice, numberOfSides, numberofDice) {
  let diceRoll;
  for (let i = 0; i < numberofDice; i++) {
    diceRoll = Math.floor((Math.random() * numberOfSides) + 1);
    dice[i] = diceRoll;
  }
}

if (allRolls === true)
  autoYahtzee();