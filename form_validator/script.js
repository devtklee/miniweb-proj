const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message) {
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message;
}

//Show success outline
function showSuccess(input) {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
}

//Check email is valid
function checkEmail(input) {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if (re.test(input.value.trim())) {
      showSuccess(input);
   } else {
      showError(input, 'Email is not valid');
   }
}

function checkPassword(input){
   var pre = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

   if (pre.test(input.value)){
      showSuccess(input);
   } else {
      showError(input, 'Password need to have at least 1 lower, uppercase alphabetical character, number ');
   }
}

//Check required
function checkRequired(inputArr) {

   inputArr.forEach(function (input) {
      if (input.value.trim() == '') {
         showError(input, `${getFieldName(input)} is required`);
      } else {
         showSuccess(input);
      }
   });

}

//Check Input Length
function checkLength(input, min, max) {
   if (input.value.length < min) {
      showError(input, `${getFieldName(input)} must be at least ${min} characters`);
   } else if (input.value.length > max) {
      showError(input, `${getFieldName(input)} can't exceed ${max} characters`);
   } else {
      showSuccess(input);
   }
}

//Check password match
function checkPasswordsMatch(input1, input2) {
   if (input1.value != input2.value) {
      showError(input2, 'Passwords do not match');
   }
}


//Get Field Name
function getFieldName(input) {
   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners - After Refactor
form.addEventListener('submit', function (e) {
   e.preventDefault();

   checkRequired([username, email, password, password2]);
   checkLength(username, 3, 15);
   checkLength(password, 6, 25);
   checkEmail(email);
   checkPassword(password);
   checkPasswordsMatch(password, password2);

});

/*Event Listeners (Before refactor)
form.addEventListener('submit', function (e) {
   e.preventDefault();

   if (username.value == '') {
      showError(username, 'Username is required');
   } else {
      showSuccess(username);
   }

   if (email.value == '') {
      showError(email, 'email is required');
   } else if (!isValidEmail(email.value)) {
      showError(email, 'Email is not valid');
   } else {
      showSuccess(email);
   }

   if (password.value == '') {
      showError(password, 'password is required');
   } else {
      showSuccess(password);
   }

   if (password2.value == '') {
      showError(password2, 'Password is required');
   } else {
      showSuccess(password2);
   }
});
*/