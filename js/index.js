function getOptions() {
  let manualRoll = document.getElementById('manual-roll').checked;
  let allRolls = document.getElementById('all-rolls').checked;
  sessionStorage.setItem('manualRoll', manualRoll.toString());
  sessionStorage.setItem('allRolls', allRolls.toString());
}

function init() {
  document.getElementById('options').reset();
}

init();