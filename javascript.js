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
    operatorInput(this.value);
}));

equal.addEventListener('click', function() {
    operate();
    display.textContent = secondNumber;
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
}