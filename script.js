
function isEmailValid() {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var email = document.getElementById("email");

  if (!email.value.match(regex)) {
    email.parentElement.className = "error";
    return false;
  }
  email.parentElement.className = "";
  return true;
}

function isPasswordValid() {
  var password = document.getElementById("password");

  if (password.value.length <= 8) {
    password.parentElement.className = "error";
    return false;
  }
  password.parentElement.className = "";
  return true;
}

function isColourValid() {
  var colour = document.getElementById("colour");

  if (colour.value == "") {
    colour.parentElement.className = "error";
    return false;
  }
  colour.parentElement.className = "";
  return true;
}

function isAnimalsValid() {
  var checkboxes = document.querySelectorAll("input[type=checkbox]")
  var count = 0;
  for (var i = 0; i < checkboxes.length; i++)
    if (checkboxes[i].checked)
      count++;

  if (count < 2) {
    checkboxes[0].parentElement.className = "error";
    return false;
  }
  checkboxes[0].parentElement.className = "";
  return true;
}

function isTigerValid() {
  var isTigerSelected = document.getElementById("tiger").checked;
  var tigerType = document.getElementById("tiger_type");

  if (isTigerSelected && tigerType.value == "") {
    tigerType.parentElement.className = "error";
    return false
  }
  tigerType.parentElement.className = "";
  return true;
}

function validateForm() {
  var validations = [
    isEmailValid(),
    isPasswordValid(),
    isColourValid(),
    isAnimalsValid(),
    isTigerValid()
  ]

  for (n = 0; n < validations.length; n++)
    if (!validations[n])
      return false;

  console.log("Valid Form");
  return false;
}
