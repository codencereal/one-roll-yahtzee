function getOptions() {
  let manualRoll = document.getElementById('manual-roll').checked;
  let allRolls = document.getElementById('all-rolls').checked;
  console.log(manualRoll, allRolls);
}

function init() {
  document.getElementById('options').reset();
}

init();