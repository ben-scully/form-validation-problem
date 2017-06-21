
function isEmailValid() {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var email = document.getElementById("email").value;
  return email.match(regex);
}

function isPasswordValid() {
  var password = document.getElementById("password").value;
  return password.length > 8;
}

function isColourValid() {
  var colour = document.getElementById("colour").value;
  return colour != '';
}

function isAnimalsValid() {
  var checkboxes = document.querySelectorAll("input[type=checkbox]")
  var count = 0;
  for (var i = 0; i < checkboxes.length; i++)
    if (checkboxes[i].checked)
      count++;
  return count >= 2;
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

  console.log("Valid Form");
  return false;
}
