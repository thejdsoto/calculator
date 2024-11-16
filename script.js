function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
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

let num1 = "";
let num2 = "";
let operation = "";
let getNum1 = true;
let isAnswered = false;
let answer = 0;
let display = document.querySelector('.display p');
let numBtn = document.querySelectorAll('.num');
let optBtn = document.querySelectorAll('.opt');
let symbol = document.createElement('span');
let equals = document.querySelector('.equals button');

numBtn.forEach((e) => {
    e.addEventListener("click", () => {
        if (getNum1 && isAnswered === false) {
            display.innerHTML += e.id;
            num1 += e.id;
            console.log(num1); 
        } else if (getNum1 === false && isAnswered === false) {
            display.innerHTML += e.id;
            num2 += e.id;
            console.log(num2);  
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
            getNum1 = false;
            operation = e.id;
            symbol.innerText = operation;
            display.appendChild(symbol);
            console.log(operation);
        } else if (num1 && num2) {
            getNum1 = false;
            answer = operate(parseInt(num1), parseInt(num2), operation);
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
    answer = operate(parseInt(num1), parseInt(num2), operation);
    display.innerHTML = answer;
    isAnswered = true;
    num2 = "";
});

// TO DO
// 1. answer goes to num1 when an operation button is clicked after answer is displayed - DONE
// 2. clicking an operation button when two numbers are evaluated will mimic function of equals button - DONE
// 3. catch when args to operate() are undefined and = button is clicked
// 4. if isAnswered === true && operation button is clicked after answer is displayed, clear num2 (verify logic if tama)
// 5. clear button
// 6. round offs
// 7. error handling during division by 0
// 8. decimal button functionality
// ADDITIONAL FEATURES ONLY!: can push to main after #7
// 9. keyboard support
// 10. backspace button => undo one

