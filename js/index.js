function getOptionsAndRedirect() {
  let manualRoll = document.getElementById('manual-roll').checked;
  let allRolls = document.getElementById('all-rolls').checked;
  sessionStorage.setItem('manualRoll', manualRoll.toString());
  sessionStorage.setItem('allRolls', allRolls.toString());

  if (!allRolls && !manualRoll) {
    location.reload;
  }
  else if (allRolls && !manualRoll) {
    window.location.replace("../pages/instaroll.html");
  }
  else {
    window.location.replace("../pages/foo.html");
  }
}

function init() {
  document.getElementById('manual-roll').checked = false;
  document.getElementById('all-rolls').checked = false;
  for (let i = 1; i <= 5; i++) {
    let die = document.getElementById('die-' + i.toString());
    die.src = "../img/dice-" + Math.floor((Math.random() * 6) + 1) + ".png";
  }
}

init();