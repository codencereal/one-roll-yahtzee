let manualRoll = sessionStorage.getItem('manualRoll') == 'true';
let allRolls = sessionStorage.getItem('allRolls') == 'true';

let foo = 1;
document.getElementById('attempts').textContent = 'You got 5 ' + foo + '\'s in ' + foo + ' attempts';