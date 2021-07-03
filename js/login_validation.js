
function validateFn() {

valid= true;

const email = document.getElementById('email');
const password = document.getElementById('password');

let regExpWeak1 = /[a-zA-Z]/;
let regExpMedium2 = /\d+/;
let regExpStrong3 = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

// Email
if(email.value.trim() === '') {
  setErrorFor(email, 'Email cannot be blank');
  valid = false;
} 
else if (!isEmail(email.value.trim())) {
  setErrorFor(email, 'Not a valid email');
  valid = false;
}
else {
  setSuccessFor(email," ");
}

// Password
if(password.value.trim() === '') {
  setErrorFor(password, 'Password cannot be blank');
  valid = false;
}
 else if(password.value.trim().length >= 10 && password.value.match(regExpWeak1) && password.value.match(regExpMedium2) && password.value.match(regExpStrong3)){
  setSuccessFor(password," ");
}
else{
  setErrorFor(password," Password not valid ");
  valid = false;
}

return valid;
}


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-check error';
  small.innerText = message;
}

function setSuccessFor(input,message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-check success';
  small.innerText = message;  
}

//Email regex check function
function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


