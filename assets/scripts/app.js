const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} + ${operator}  +${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNumber = getUserInput();
  const InitialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", InitialResult, currentResult);
}

function substract() {
  const enteredNumber = getUserInput();
  const InitialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", InitialResult, currentResult);
}
function multiply() {}
function divide() {}

addBtn.addEventListener("click", add);
