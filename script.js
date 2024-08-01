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
  let percent = 0;

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      checkedCount++;
      percent = (checkedCount / checkboxes.length) * 100;
      message(percent); 
    }
  });

  checkedCountSpan.textContent = checkedCount;
  percentSpan.textContent = percent;
}

function message(percentage) {
  let message;
  if (percentage >= 95) {
    message = "Damn Slut";
  }else if(percentage>=85){
    message = "Thats extreme, are you sure you didn't click any on accident";
  }else if(percentage >= 50){
    message = "Damn you do like getting dirty."
  }else if(percentage >= 25){
    message = "You've been getting a little adventurous"
  }else{
    message = "You're a pure soul, you make a preist jelous."
  }
  messageSpan.textContent = message; // Set the message text
}
