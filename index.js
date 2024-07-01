let display = document.getElementById("display");
let currentOperand = "";
let previousOperand = "";
let operator = null;

function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) return;
  currentOperand = currentOperand.toString() + number.toString();
  updateDisplay();
}

function updateDisplay() {
  display.value = currentOperand;
}

function setOperator(op) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    calculateResult();
  }
  operator = op;
  previousOperand = currentOperand;
  currentOperand = "";
}

function calculateResult() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operator) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation;
  operator = null;
  previousOperand = "";
  updateDisplay();
}

function clearDisplay() {
  currentOperand = "";
  previousOperand = "";
  operator = null;
  updateDisplay();
}
