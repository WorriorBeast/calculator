let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '';

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

numbers.forEach((number) => number.addEventListener('click', function() {
    numberInput(this.value);
    if (displayValue.length < 9) display.textContent = displayValue;
}));

operators.forEach((op) => op.addEventListener('click', function() {
    operatorInput(this.value);
}));

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function numberInput(num) {
    displayValue += num;
    firstNumber = displayValue.slice(0,8);
}

function operatorInput(op) {
    operator = op;
    secondNumber = firstNumber;
    firstNumber = '';
}

function operate() {
    switch (operator) {
        case '+':
            add(firstNumber, secondNumber);
            break;

        case '-':
            subtract(firstNumber,secondNumber);
            break;

        case '*':
            multiply(firstNumber, secondNumber);
            break;

        case '/':
            divide(firstNumber, secondNumber);
            break;
    }
}