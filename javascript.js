let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayValue = null;

const buttons = document.querySelectorAll('button');

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

function operate(operator, firstNumber, firstNumber) {
    if (operator === '+') {
        add(firstNumber, secondNumber);

    } else if (operator === '-') {
        subtract(firstNumber, secondNumber);

    } else if (operator = '*') {
        multiply(firstNumber, secondNumber);

    } else if (operator ='/') {
        divide(firstNumber, secondNumber);
    }
}

function clickButton() {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if (this.classList.contains('number')) {
                updateDisplay(this.value);
            }
        })
    }
}
clickButton();

function updateDisplay(displayValue) {
    const display = document.querySelector('.display');
    display.textContent = displayValue;
}
updateDisplay(0);