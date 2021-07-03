
function validateFn() {
  valid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const mobile = document.getElementById('mobile');
  const password = document.getElementById('password');
  const password2 = document.getElementById('password2');

  // RegEx for password strength and mobile
  let regExWeak1 = /[a-zA-Z]/;
  let regExMedium2 = /\d+/;
  let regExStrong3 = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
  let regExMobile = /^(\d{3})(\.|-)?(\d{3})(\.|-)?(\d{4})$/;

  // Name blank check
  if(name.value.trim() === '') {
    setErrorFor(name, 'Name cannot be blank');
    valid = false;
  }
  else {
    setSuccessFor(name, " ");
  }

  // Email blank and validity check
  if(email.value.trim() === '') {
    setErrorFor(email, 'Email cannot be blank');
    valid = false;
  }
  else if(isEmail(email.value.trim()) == false) {
    setErrorFor(email, 'Not a valid email');
    valid = false;
  }
  else {
    setSuccessFor(email, " ");
  }

  //Mobile blank and valid check
  if(mobile.value.trim() === '') {
    setErrorFor(mobile, 'Mobile number cannot be blank');
    valid = false;
  }
  else if(mobile.value.trim().match(regExMobile)) {
    setSuccessFor(mobile, " ");
  }
  else {
    setErrorFor(mobile, 'Invalid number');
    valid = false;
  }

  // Password blank, validity and strength check
  if(password.value.trim() === '') {
    setErrorFor(password, 'Password cannot be blank');
    valid = false;
  }
  else if(password.value.trim().length >= 10 && password.value.match(regExWeak1) && password.value.match(regExMedium2) && password.value.match(regExStrong3)){
    setSuccessFor(password," ");
  }
  else{
    setErrorFor(password," ");
    valid = false;
  }

  // Confirm password check
  if(password2.value.trim() === '') {
    setErrorFor(password2, 'Password cannot be blank');
    valid = false;
  }
  else if(password.value !== password2.value) {
    setErrorFor(password2, 'Passwords does not match');
    valid = false;
  }
  else{
    setSuccessFor(password2,"");
  }

  return valid;

}

// setErrorFor function
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-check error';
  small.innerText = message;
}

// setSuccessFor function
function setSuccessFor(input, message) {
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

//onkeyup trigger function
function trigger() {
  const s = document.getElementById('password');

  let regExpWeak = /[a-z]/;
  let regExpMedium = /\d+/;
  let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

  if(s.value != ""){
    if(s.value.length <= 7 && (s.value.match(regExpWeak) || s.value.match(regExpMedium) || s.value.match(regExpStrong))){
      const password = document.getElementById('password');
      password.parentElement.className = 'form-check error';
      password.parentElement.querySelector('small').innerText = 'Weak Passworrd';
    }
    if(s.value.length >= 8 && ((s.value.match(regExpWeak) && s.value.match(regExpMedium)) || (s.value.match(regExpMedium) && s.value.match(regExpStrong)) || (s.value.match(regExpWeak) && s.value.match(regExpStrong)))){
      const password = document.getElementById('password');
      password.parentElement.className = 'form-check error';
      password.parentElement.querySelector('small').innerText = 'Moderately Strong Passworrd';
    }
    if(s.value.length >= 10 && s.value.match(regExpWeak) && s.value.match(regExpMedium) && s.value.match(regExpStrong)){
      const password = document.getElementById('password');
      password.parentElement.className = 'form-check success';
      password.parentElement.querySelector('small').innerText = 'Strong Passworrd';
    }
  }
}

