let firstNumber = '';
let operator = '';
let secondNumber = '';

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');

numbers.forEach((number) => number.addEventListener('click', function() {
    numberInput(this.value);
    display.textContent = firstNumber;
}));

operators.forEach((op) => op.addEventListener('click', function() {
    if (operator !== '') operate();
    operatorInput(this.value);

    if (secondNumber.length > 8 && typeof secondNumber === typeof firstNumber) {
        secondNumber = Number(secondNumber);
        display.textContent = secondNumber.toPrecision(3);
        secondNumber = secondNumber.toString();
    } else if (secondNumber === 'HAHA') {
        display.textContent = secondNumber;
        firstNumber = '';
        secondNumber = '';
    } else {
        display.textContent = secondNumber;
    }
}));

equal.addEventListener('click', function() {
    if (firstNumber !== '' && secondNumber !== '') {
        operate();
    
        if (secondNumber.length > 8 && typeof secondNumber === typeof firstNumber) {
            secondNumber = Number(secondNumber);
            display.textContent = secondNumber.toPrecision(3);
            secondNumber = secondNumber.toString();
        } else if (secondNumber === 'HAHA') {
            display.textContent = secondNumber;
            firstNumber = '';
            secondNumber = '';
        } else {
            display.textContent = secondNumber;
        }
        operator = '';
    }
});

clear.addEventListener('click', function() {
    firstNumber = '';
    secondNumber = ''; 
    operator = '';

    display.textContent = 0;
});

decimal.addEventListener('click', function()  {
    if (!firstNumber.includes('.')) firstNumber += '.';
    
    display.textContent = firstNumber;
});

function numberInput(num) {
    if (firstNumber.length < 8) {
        firstNumber += num;
    }
}

function operatorInput(op) {
    operator = op;
    if (secondNumber === 'HAHA'){
        secondNumber;
    } else {
        secondNumber = firstNumber;
    }
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
            if (firstNumber === 0) {
                secondNumber = 'HAHA';
            } else {
                secondNumber /= firstNumber;
            }
            break;
    }
    
    if (typeof secondNumber === typeof firstNumber) {
        firstNumber = secondNumber.toString();
        secondNumber = roundNum(secondNumber);
        secondNumber = secondNumber.toString();
    }
}

function roundNum() {
    return Math.round(secondNumber * 100) / 100;
}