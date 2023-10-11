let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayValue = 0;

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
                concatNumber(this.value);
                updateDisplay();
            }
        })
    }
}
clickButton();

function updateDisplay() {
    const display = document.querySelector('.display');
    display.textContent = displayValue;

    if (displayValue.length > 8) display.textContent = displayValue.slice(0,8);
}
updateDisplay(displayValue);

function concatNumber(number) {
    if (displayValue == 0) {
        displayValue = number;
        
    } else if (displayValue !== 0) {
        displayValue += number;
    }
}