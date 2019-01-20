let targetNumber = Math.floor(Math.random() * 10) + 1;
var attempts = 1;

var submit = document.getElementById('submit'),
   number = document.getElementById('guess'),
   input = document.getElementById('input'),
   text = document.getElementById('text'),
   replay = document.getElementById('replay');

function init() {
   submit.onclick = function (arg) {
      arg.preventDefault();
      check(guess);
   }
}

function check(input) {
   if (input.value == targetNumber) {
      showWin(targetNumber);
   } else if (input.value != targetNumber && attempts < 5) {
      showError();
   } else {
      showLoss();
   }
}

function showWin(win) {
   text.innerHTML = win + ' WOW! You WON!';
   removeform()
}

function showError() {
   text.innerHTML = attempts + ' unsuccsessful attempts. Choose number from 1 to 10!';
   attempts++
}

function showLoss() {
   text.innerHTML = 'You lose! The winning number was:' + targetNumber;
   attempts++;
   removeform()
}

function removeform() {
   var element = document.getElementById("input");
   element.parentNode.removeChild(element);
}

init();