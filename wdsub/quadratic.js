let inputArr = document.querySelectorAll("input");

let sol1 = document.getElementById("answ1");
let sol2 = document.getElementById("answ2");

function computeSolutions() {
  let _a = inputArr[0].value;
  let _b = inputArr[1].value;
  let _c = inputArr[2].value;
  if (_a != "" && _b != "" && _c != "") {
  let ans1 = (- _b + Math.sqrt(Math.pow(_b,2) - 4 * _a * _c)) / (2 * _a);
  sol1.innerHTML = ans1;
  let ans2 = (- _b - Math.sqrt(Math.pow(_b,2) - 4 * _a * _c)) / (2 * _a);
  sol2.innerHTML = ans2;
  } else {
    window.alert("Please enter 3 coefficients to compute the solutions");
  }
}
