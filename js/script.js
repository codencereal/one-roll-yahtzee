let manualRoll = sessionStorage.getItem('manualRoll') == 'true';
let allRolls = sessionStorage.getItem('allRolls') == 'true';

let foo = 1;
document.getElementById('attempts').textContent = 'You got 5 ' + foo + '\'s in ' + foo + ' attempts';

function createRoll() {
  let outerDiv = document.createElement("div");
  let innerDiv = document.createElement("div");
  let dice = document.createElement("div");
  let rolls = document.createElement("div");
  let p = document.createElement("p");
  let dieArray = []

  outerDiv.className = "outer-container";
  innerDiv.className = "inner-container";
  dice.className = "dice";
  rolls.className = "rolls";

  for (let i = 0; i < 5; i++) {
    dieArray.push(document.createElement("img"));
    dieArray[i].className = "die";
    dieArray[i].src = "../img/dice-" + 1 + ".png"; //Will edit to display the die corresponding to the number rolled
  }

  p.textContent = "foo";

  rolls.appendChild(p);

  for (let i = 0; i < 5; i++)
    dice.appendChild(dieArray[i]);
  
  innerDiv.appendChild(dice);
  innerDiv.appendChild(rolls);
  outerDiv.appendChild(innerDiv);
  document.body.appendChild(outerDiv);
}

createRoll();