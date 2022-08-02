let sum = document.querySelector("#sum");
let min = document.querySelector("#min");
let div = document.querySelector("#div");
let mul = document.querySelector("#mul");
let mod = document.querySelector("#mod");

sum.addEventListener("click", (event) => {
  add();
});

min.addEventListener("click", (event) => {
  minus();
});

div.addEventListener("click", (event) => {
  divide();
});

mul.addEventListener("click", (event) => {
  multiply();
});

mod.addEventListener("click", (event) => {
  modulus();
});

function add() {
  var num1, num2, sum;
  num1 = Number(document.getElementById("firstNum").value);
  num2 = Number(document.getElementById("secondNum").value);
  sum = num1 + num2;
  document.getElementById("ats").value = sum;
}

function minus() {
  var num1, num2, min;
  num1 = Number(document.getElementById("firstNum").value);
  num2 = Number(document.getElementById("secondNum").value);
  min = num1 - num2;
  document.getElementById("ats").value = min;
}

function divide() {
  var num1, num2, min;
  num1 = Number(document.getElementById("firstNum").value);
  num2 = Number(document.getElementById("secondNum").value);
  div = num1 / num2;
  document.getElementById("ats").value = div;
}
function multiply() {
  var num1, num2, mul;
  num1 = Number(document.getElementById("firstNum").value);
  num2 = Number(document.getElementById("secondNum").value);
  mul = num1 * num2;
  document.getElementById("ats").value = mul;
}

function modulus() {
  var num1, num2, mod;
  num1 = Number(document.getElementById("firstNum").value);
  num2 = Number(document.getElementById("secondNum").value);
  mod = num1 % num2;
  document.getElementById("ats").value = mod;
}
