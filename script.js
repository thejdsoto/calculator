let num1 = "";
let num2 = "";
let operation = "";
let answer = 0;
let getNum1 = true;
let isAnswered = false;
let hasDecimal = false;
let display = document.querySelector('.display p');
let numBtn = document.querySelectorAll('.num');
let optBtn = document.querySelectorAll('.opt');
let symbol = document.createElement('span');
let equals = document.querySelector('.equals button');
let clear = document.querySelector('.clear');
let decimal = document.querySelector('.decimal');


function add(num1, num2) {
    return Math.round((num1 + num2) * 100) / 100;
}

function subtract(num1, num2) {
    return Math.round((num1 - num2) * 100) / 100;
}

function multiply(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}

function divide(num1, num2){
    if (num2 === 0) { 
        clearData();
        return "CANNOT DIVIDE BY ZERO!" 
    } else {
        return Math.round((num1 / num2) * 100) / 100;
    }
}

function operate(num1, num2, operation) {
    switch(operation) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
    }
}

function clearData() {
    num1 = "";
    num2 = "";
    operation = "";
    answer = 0;
    getNum1 = true;
    isAnswered = false;
    hasDecimal = false;
    display.innerHTML = "<p></p>"
}

numBtn.forEach((e) => {
    e.addEventListener("click", () => {
        if (getNum1 && isAnswered === false) {
            display.innerHTML += e.id;
            num1 += e.id;
        } else if (getNum1 === false && isAnswered === false) {
            display.innerHTML += e.id;
            num2 += e.id; 
        } else if (getNum1 === false && isAnswered === true) {
            num1 = answer;
            display.innerHTML += e.id;
            num2 += e.id;
        }
 
    });
});

optBtn.forEach((e) => {
    e.addEventListener("click", () => {
        if (num1 && !num2) {
            hasDecimal = false;
            getNum1 = false;
            operation = e.id;
            symbol.innerText = operation;
            display.appendChild(symbol);
        } else if (num1 && num2) {
            hasDecimal = false;
            getNum1 = false;
            answer = operate(parseFloat(num1), parseFloat(num2), operation);
            operation = e.id;
            symbol.innerText = operation;
            display.innerHTML = answer;
            display.appendChild(symbol);
            isAnswered = true;
            num2 = "";
        }
    });
});

equals.addEventListener("click", () => {
    if (num1 && num2) {
        hasDecimal = false;
        answer = operate(parseFloat(num1), parseFloat(num2), operation);
        display.innerHTML = answer;
        isAnswered = true;
        num2 = "";
    }
});

clear.addEventListener("click", () => {
    clearData();
});

decimal.addEventListener("click", () => {
    if (getNum1 && isAnswered === false && hasDecimal === false) {
        display.innerHTML += ".";
        num1 += ".";
    } else if ((getNum1 === false && isAnswered === false && hasDecimal === false) || ((getNum1 === false && isAnswered === true && hasDecimal === false)))  {
        display.innerHTML += ".";
        num2 += ".";
    }
    
    hasDecimal = true;
});

// TO DO
// 1. answer goes to num1 when an operation button is clicked after answer is displayed - DONE
// 2. clicking an operation button when two numbers are evaluated will mimic function of equals button - DONE
// 3. catch when args to operate() are undefined and = button is clicked - DONE
// 4. if isAnswered === true && operation button is clicked after answer is displayed, clear num2 (verify logic if tama) - DONE
// 5. clear button - DONE
// 6. round offs - DONE
// 7. error handling during division by 0 - DONE
// 8. decimal button functionality - DONE
// ADDITIONAL FEATURES ONLY!: can push to main after #7
// 9. keyboard support
// 10. backspace button => undo one

