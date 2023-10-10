const firstNumber = null;
const operator = null;
const secondNumber = null;

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

function operate(operator) {
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