//console.log(true && true);
//console.log(true && false);
//console.log(false && false);

//console.log(true || true);
//console.log(true || false);
//console.log(false || false);

function passwordChecker(password) {
  if (password === "strong-password") {
    return true;
  } else return false;
}

console.log(passwordChecker("strong-password"));
