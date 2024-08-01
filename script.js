// script.js
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkedCountSpan = document.getElementById('checkedCount');
const percentSpan = document.getElementById('percent');
const messageSpan = document.getElementById('message'); // Get the message element
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', countCheckboxes);
});

function countCheckboxes() {
  let checkedCount = 0;
  let percent = 100;

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      checkedCount++;
      percent = 100 - (checkedCount / checkboxes.length) * 100;
      message(percent); 
    }
  });

  checkedCountSpan.textContent = checkedCount;
  percentSpan.textContent = percent;
}

function message(percentage) {
  let message;
  if (percentage === 100) {
    message = "Hats of to you, not even God is as pure as that, maybe check to see is you missed anything";
  } else if (percentage >= 90) {
    message = "You make a priest jelous, you're way too pure loosen up a bit";
  } else if (percentage >= 70) {
    message = "You don't seem to like getting dirty, but at least you're not one of those pure monks.";
  } else if (percentage >= 40) {
    message = "You certainly don't hold back on your dark intentions, but don't get too excited";
  } else {
    message = "I'm a bit concerened. Maybe use protection to avoid accidents. Make sure you haven't accidently clicked something by accident.";
  }
  messageSpan.textContent = message; // Set the message text
}