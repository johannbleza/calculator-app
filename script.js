const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const clear = document.getElementById("clear");
const operators = document.querySelectorAll(".operators");

let equation = "";
let isActiveOperator = false;

function appendText(input) {
  resetOperators();
  if (display.value == "0") {
    clearDisplay();
  }
  if (isActiveOperator) {
    clearDisplay();
    isActiveOperator = false;
  }
  display.value += input;
  equation += input;
  clear.innerHTML = "C";
  console.log(equation);
}

function resetOperators() {
  operators.forEach((operator) => {
    operator.classList.remove("activeOperator");
  });
}

function clearDisplay() {
  display.value = "";
}

function clearEquation() {
  display.value = "0";
  equation = "";
  clear.innerHTML = "AC";
  resetOperators();
}

function appendOperator(operator) {
  if (operator === "x") {
    equation += "*";
    console.log(equation);
  } else if (operator === "÷") {
    equation += "/";
    console.log(equation);
  } else {
    equation += operator;
    console.log(equation);
  }
  isActiveOperator = true;
}

operators.forEach((operator) => {
  const operatorList = operator.innerHTML;
  console.log(operatorList);
  operator.addEventListener("click", () => {
    resetOperators();
    appendOperator(operator.innerHTML);
    operator.classList.add("activeOperator");
  });
});

function changeSigns() {
  equation = parseInt(equation) * -1;
  console.log(equation);
  display.value = equation;
}

function toPercent() {
  equation = parseFloat(equation) / 100;
  console.log(equation.toString());
  display.value = equation.toString();
}

function calculate() {
  resetOperators();
  let answer = eval(equation);
  equation = answer.toString();
  console.log(answer);
  display.value = answer;
}
