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
    display.value = currentInput || '0';
}

// Function to perform calculations


// Event listeners for number buttons
numbers.forEach(number => {
    number.addEventListener('click', () => {
        currentInput += number.textContent;
        updateDisplay();
    });
});

// Event listener for operators


// Event listener for equal button
equal.addEventListener('click', () => {
    calculate();
    updateDisplay();
});

// Event listener for decimal

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