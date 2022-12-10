let screenValue = '0';
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
const buttonList = document.querySelectorAll('button');

function buttonClick() {
    for (let i = 0; i < buttonList.length; i++) {

        buttonList[i].addEventListener('click', function () {

            if (buttonList[i].classList.contains('number')) {
                inputNumber(buttonList[i].value);
                updateScreen();
            } else if (buttonList[i].classList.contains('operator')) {
                inputOperator(buttonList[i].value);
            } else if (buttonList[i].classList.contains('equals')) {
                inputEquals();
                updateScreen();
            } else if (buttonList[i].classList.contains('decimal')) {
                inputDecimal(buttonList[i].value);
                updateScreen();
            } else if (buttonList[i].classList.contains('percent')) {
                inputPercent(screenValue);
                updateScreen();
            } else if (buttonList[i].classList.contains('sign')) {
                inputSign(screenValue);
                updateScreen();
            } else if (buttonList[i].classList.contains('clear'))
                clearDisplay();
            updateScreen();
        })
    }
}

buttonClick();

function inputNumber(number) {
    if (firstOperator == null) {
        if (screenValue == '0') {
            screenValue = number;
        } else if (screenValue == firstNumber) {
            screenValue = number;
        } else {
            screenValue += number;
        }
    } else {
        if (screenValue == firstNumber) {
            screenValue = number;
        } else {
            screenValue += number;
        }
    }
}

function inputOperator(operator) {
    if (firstOperator != null && secondOperator === null) {
        secondOperator = operator;
        secondNumber = screenValue;
        result = operate(Number(firstNumber), Number(secondNumber), firstOperator);
        screenValue = result;
        firstNumber = screenValue;
        result = null;
    } else if (firstOperator != null && secondOperator != null) {
        secondNumber = screenValue;
        result = operate(Number(firstNumber), Number(secondNumber), secondOperator);
        secondOperator = operator;
        screenValue = result;
        firstNumber = screenValue;
        result = null;
    } else {
        firstOperator = operator;
        firstNumber = screenValue;
    }
}

function inputEquals() {
    if (firstOperator == null) {
        screenValue = screenValue;
    } else if (secondOperator != null) {
        secondNumber = screenValue;
        result = operate(Number(firstNumber), Number(secondNumber), secondOperator);
        
        if (result == 'oof') {
            screenValue = 'oof';
        } else {
            screenValue = result;
            firstNumber = screenValue;
            secondNumber = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    } else {
        secondNumber = screenValue;
        result = operate(Number(firstNumber), Number(secondNumber), firstOperator);
        if (result == 'oof') {
            screenValue = 'oof';
        } else {
            screenValue = result;
            firstNumber = screenValue;
            secondNumber = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    }
}

function inputDecimal(dot) {
    if (screenValue === firstNumber || screenValue === secondNumber) {
        screenValue = '0';
        screenValue += dot;
    } else if (!screenValue.includes(dot)) {
        screenValue += dot;
    }
}

function inputPercent(num) {
    screenValue = (num / 100).toString();
}

function inputSign(num) {
    screenValue = (num * -1).toString();
}

function operate(num1, num2, op) {
    if (op == '+') {
        return num1 + num2;
    } else if (op == '-') {
        return num1 - num2;
    } else if (op == '*') {
        return num1 * num2;
    } else if (op == '/') {
        if (num2 == 0) {
            return 'oof';
        } else {
            return num1 / num2;
        }
    }
}

function clearDisplay() {
    screenValue = '0';
    firstNumber = null;
    secondNumber = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}


function updateScreen() {
    const screen = document.getElementById('screen');

    if (screenValue.length > 10) {
        screen.innerText = screenValue.substring(0, 10);
    }
    else {
        screen.innerText = screenValue;
    }
}

updateScreen();