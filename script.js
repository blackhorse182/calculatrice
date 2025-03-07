// Link DOM elements
const display = document.getElementById('value');
const buttons = document.querySelectorAll('.calculator span');
const clear = document.getElementById('clear');
const operators = document.querySelectorAll('#operator');
const equal = document.getElementById('equals');
const decimal = document.getElementById('decimal');
const numbers = document.querySelectorAll('#number');   
const backspace = document.getElementById('backspace');

// Initialize calculator state variables
let currentInput = '';
let previousInput = '';
let operator = '';

// Function to update the display
function updateDisplay() {
    display.value = currentInput ;
}

// Function to perform calculations
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = '';
    previousInput = '';
}

// Event listeners for number buttons
numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (number.textContent === '00' && !currentInput.includes('.')) {
            return; // Prevent "00" from being used without a decimal point
        }
        currentInput += number.textContent;
        updateDisplay();
    });
});

// Event listener for operators
operators.forEach(op => {
    op.addEventListener('click', () => {
        if (currentInput === '') return;
        if (previousInput !== '') {
            calculate();
        }
        operator = op.textContent;
        previousInput = currentInput;
        currentInput = '';
        updateDisplay();
    });
});

// Event listener for equal button
equal.addEventListener('click', () => {
    calculate();
    updateDisplay();
});

// Event listener for decimal
decimal.addEventListener('click', () => {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
});

// Event listener for clear
clear.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
});

// Event listener for backspace
backspace.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
});

// Initial display
updateDisplay();