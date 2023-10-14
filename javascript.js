let firstNumber = '';
let operator = '';
let secondNumber = '';

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');

numbers.forEach((number) => number.addEventListener('click', function() {
    numberInput(this.value);
    display.textContent = firstNumber;
}));

operators.forEach((op) => op.addEventListener('click', function() {
    if (operator !== '') operate();
    operatorInput(this.value);

    if (secondNumber.length > 8) {
        secondNumber = Number(secondNumber);
        display.textContent = secondNumber.toPrecision(4);
        secondNumber = secondNumber.toString();
    } else {
        display.textContent = secondNumber;
    }
}));

equal.addEventListener('click', function() {
    operate();
    
    if (secondNumber.length > 8) {
        secondNumber = Number(secondNumber);
        display.textContent = secondNumber.toPrecision(4);
        secondNumber = secondNumber.toString();
    } else {
        display.textContent = secondNumber;
    }
})

function numberInput(num) {
    if (firstNumber.length < 8) {
        firstNumber += num;
    }
}

function operatorInput(op) {
    operator = op;
    secondNumber = firstNumber;
    firstNumber = '';
}

function operate() {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    switch (operator) {
        case '+':
            secondNumber += firstNumber;
            break;

        case '-':
            secondNumber -= firstNumber;
            break;

        case '*':
            secondNumber *= firstNumber;
            break;

        case '/':
            secondNumber /= firstNumber;
            break;
    }
    firstNumber = secondNumber.toString();
    secondNumber = roundNum(secondNumber);
    secondNumber = secondNumber.toString();
}

function roundNum() {
    return Math.round(secondNumber * 100) / 100;
}