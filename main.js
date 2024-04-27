function add(a, ...b) {
  let sum = a;
  for (let i = 0; i < b.length; i++) {
    sum += b[i];
  }
  return sum;
}

function sub(a, ...b) {
  let sum = a;
  for (let i = 0; i < b.length; i++) {
    sum -= b[i];
  }
  return sum;
}

function mul(a, ...b) {
  let result = a;
  for (let i = 0; i < b.length; i++) {
    result *= b[i];
  }
  return Math.round(result * 10) / 10;
}

function div(a, ...b) {
  let result = a;
  for (let i = 0; i < b.length; i++) {
    result /= b[i];
  }
  return Math.round(result * 10) / 10;
}
function mod(a, ...b) {
  let result = a;
  for (let i = 0; i < b.length; i++) {
    result %= b[i];
  }
  return Math.round(result * 10) / 10;
}

function operate(num1, num2, operator) {
  if (!Number.isInteger(num1)) {
    num1 = +num1;
  }
  if (!Number.isInteger(num2)) {
    num2 = +num2;
  }
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return sub(num1, num2);
    case "*":
      return mul(num1, num2);
    case "/":
      return div(num1, num2);
    case "%":
      return mod(num1, num2);
    default:
      return "Invalid Input";
  }
}
const display = document.getElementById("input");
const buttons = document.querySelectorAll("#numbers");
display.value = "0";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.value === "0") display.value = button.innerText;
    else display.value += button.innerText;
  });
});
let operator = "";
let num1 = 0;
let num2 = 0;

//operator-->
document.querySelectorAll("#operator").forEach((button) => {
  button.addEventListener("click", () => {
    num1 = display.value;
    operator = button.innerText;
    display.value = "";
  });
});
//clear-->
document.getElementById("del").addEventListener("click", () => {
  num1 = 0;
  operator = "";
  display.value = "0";
});

//equals
document.querySelector("#equals").addEventListener("click", () => {
  num2 = display.value;
  display.value = operate(num1, num2, operator);
});

