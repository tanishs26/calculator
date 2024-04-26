function add(a, ...b) {
  sum = a;
  for (i = 0; i < b.length; i++) {
    sum += b[i];
  }
  return sum;
}
//subtraction
function sub(a, ...b) {
  sum = a;
  for (i = 0; i < b.length; i++) {
    sum -= b[i];
  }
  return sum;
}

//Multiplication
function mul(a, ...b) {
  result = a;
  for (i = 0; i < b.length; i++) {
    result *= b[i];
  }
  return result;
}
//Division
function div(a, ...b) {
  result = a;
  for (i = 0; i < b.length; i++) {
    result /= b[i];
  }
  return result;
}

function operate(num1, num2, operator) {
  if (!Number.isInteger(num1)) {
    num1 = +num1;
  }
  if (!Number.isInteger(num2)) {
    num1 = +num2;
  }
  switch (operator) {
    case "+":
      console.log(add(num1, num2));
      break;
    case "-":
      console.log(sub(num1, num2));
      break;
    case "*":
      console.log(mul(num1, num2));
      break;
    case "/":
      console.log(div(num1, num2));
      break;
    default:
      console.log("Invalid Input");
  }
}
operate("2", 3,"");
