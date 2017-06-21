
function isEmailValid() {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var email = document.getElementById("email");

  if (!email.value.match(regex)) {
    email.parentElement.className = "error";
    return false;
  }
  return true;
}

function isPasswordValid() {
  var password = document.getElementById("password");
  return password.value.length > 8;

  if (password.value.length <= 8) {
    password.parentElement.className = "error";
    return false;
  }
  return true;
}

function isColourValid() {
  var colour = document.getElementById("colour");

  if (colour.value == "") {
    colour.parentElement.className = "error";
    return false;
  }
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
  return true;
}

function isTigerValid() {
  var isTigerSelected = document.getElementById("tiger").checked;
  if (!isTigerSelected)
    return true;

  var tigerType = document.getElementById("tiger_type");

  if (tigerType.value == "") {
    tigerType.parentElement.className = "error";
    return false
  }
  return true;
}

function removeErrorClassNames() {
  var errorArr = document.getElementsByClassName("error");
  for (var i = 0; i < errorArr.length; i++)
    errorArr[i].className = "";
}

function validateForm() {
  if (!isEmailValid()) {
    console.log("Invalid Email");
    return false;
  }

  if (!isPasswordValid()) {
    console.log("Invalid Password");
    return false;
  }

  if (!isColourValid()) {
    console.log("Invalid Colour");
    return false;
  }

  if (!isAnimalsValid()) {
    console.log("Invalid Animals");
    return false;
  }

  if (!isTigerValid()) {
    console.log("Invalid Tiger");
    return false;
  }

  console.log("Valid Form");
  removeErrorClassNames();
  return true;
}
