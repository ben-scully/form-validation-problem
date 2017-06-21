
function isEmailValid() {
  var regex = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
  var email = document.getElementById("email").value;
  return email.match(regex)
}

function validateForm() {
  if (!isEmailValid()) {
    console.log("Invalid Email");
    return false;
  }
  console.log("Valid Form");
  return true;
}
