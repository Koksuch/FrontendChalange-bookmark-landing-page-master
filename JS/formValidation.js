const form = document.querySelector('form');
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
var errorBlank = "Whoops, make sure it’s not blank";
var errorFormat = "Whoops, make sure it’s an email";


form.addEventListener('submit', (e) => {
  let emailInput = document.querySelector('form label input');
  let errorDiv = document.querySelector('#error-div');

  if (emailInput.value === '' || emailInput.value == null) {
    e.preventDefault();
    errorDiv.style.opacity = 1;
    errorDiv.firstChild.innerHTML = errorBlank;
    emailInput.nextElementSibling.style.opacity = 1;
    emailInput.classList.add('error');

    console.log(emailInput);
  }
  else if (emailPattern.test(emailInput.value) == false) {
    e.preventDefault();
    errorDiv.style.opacity = 1;
    errorDiv.firstChild.innerHTML = errorFormat;
    emailInput.nextElementSibling.style.opacity = 1;
    emailInput.classList.add('error');
  }
  else {
    errorDiv.style.opacity = 0;
    emailInput.nextElementSibling.style.opacity = 0;
    emailInput.classList.remove('error');
  }
});