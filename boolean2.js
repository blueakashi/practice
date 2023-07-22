//console.log(true && true);
//console.log(true && false);
//console.log(false && false);

//console.log(true || true);
//console.log(true || false);
//console.log(false || false);

//NUMBER 1

// function passwordChecker(password) {
//   if (password === "strong-password") {
//     return true;
//   } else return false;
// }

// console.log(passwordChecker("strong-password"));

//NUMBER 2

// function positiveChecker(num, num2) {
//   if (num > 0 && num2 > 0) {
//     return true;
//   } else return false;
// }
// console.log(positiveChecker(1, 2));

//NUMBER 3

// function tempChecker(M, T, W, Th, F, Sa, Su) {
//   if (M > 90 || T > 90 || W > 90 || Th > 90 || F > 90 || Sa > 90 || Su > 90)
//     return true;
//   else return false;
// }

// console.log(tempChecker(90, 2, 3, 4, 5, 6, 7));

function forLoop() {
  for (let i = 0; i < 100; i = i + 1) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
forLoop();
