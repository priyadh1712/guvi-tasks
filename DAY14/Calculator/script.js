const result = document.getElementById('result');

let currentIn = '0';
let previousIn = '';
let operator = null;
let shouldResetScreen = false;

function updateScreen(value) {
    result.value = value;
}

function inputNumber(number) {
    if (shouldResetScreen) {
        currentIn = number;
        shouldResetScreen = false;
    } else {
        currentIn = currentIn === '0' ? number : currentIn + number;
    }
    updateScreen(currentIn);
}

function inputOperator(op) {
    if (operator !== null) calculate();
    previousIn = currentIn;
    operator = op;
    shouldResetScreen = true;
}

function clearCalculator() {
    currentIn = '0';
    previousIn = '';
    operator = null;
    shouldResetScreen = false;
    updateScreen(currentIn);
}

function deleteLast() {
    currentIn = currentIn.slice(0, -1) || '0';
    updateScreen(currentIn);
}

function addDecimal() {
    if (!currentIn.includes('.')) {
        currentIn += '.';
        updateScreen(currentIn);
    }
}

function calculate() {
    let result;
    const prev = parseFloat(previousIn);
    const curr = parseFloat(currentIn);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '×':
            result = prev * curr;
            break;
        case '÷':
            if (curr === 0) {
                alert("Cannot divide by 0");
                return;
            }
            result = prev / curr;
            break;
        default:
            return;
    }

    currentIn = result.toString();
    operator = null;
    previousIn = '';
    updateScreen(currentIn);
}

function equal() {
    calculate();
    shouldResetScreen = true;
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const action = button.textContent.trim();

        if (!isNaN(action) || action === '0' || action === '00') {
            inputNumber(action);
        } else if (action === 'C') {
            clearCalculator();
        } else if (action === '←') {
            deleteLast();
        } else if (action === '.') {
            addDecimal();
        } else if (action === '=') {
            equal();
        } else {
            inputOperator(action);
        }
    });
});

clearCalculator();
