function getOptions() {
  let manualRoll = document.getElementById('manual-roll').checked;
  let allRolls = document.getElementById('all-rolls').checked;
  sessionStorage.setItem('manualRoll', manualRoll.toString());
  sessionStorage.setItem('allRolls', allRolls.toString());
}

function init() {
  document.getElementById('options').reset();
  for (let i = 1; i <= 5; i++) {
    let die = document.getElementById('die-' + i.toString());
    die.src = "../img/dice-" + Math.floor((Math.random() * 6) + 1) + ".png";
  }
}

init();