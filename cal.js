let currentInput = '';

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}

function operate(operator) {
  if (currentInput !== '') {
    currentInput += operator;
    document.getElementById('display').value = currentInput;
  }
}

function calculate() {
  if (currentInput !== '') {
    try {
      const result = eval(currentInput);
      document.getElementById('display').value = result;
      currentInput = result.toString();
    } catch (error) {
      document.getElementById('display').value = 'Error';
      currentInput = '';
    }
  }
}
