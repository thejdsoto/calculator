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
        getNum1 = false;
        operation = e.id;
        symbol.innerText = operation;
        display.appendChild(symbol);
        console.log(operation);
    });
});

equals.addEventListener("click", () => {
    answer = operate(parseInt(num1), parseInt(num2), operation);
    display.innerHTML = answer;
    isAnswered = true;
    num2 = "";
});

// TO DO
// 1. answer goes to num1 when an operation button is clicked after answer is displayed
// 2. catch when args to operate() are undefined and = button is clicked
// 3. if isAnswered === true && operation button is clicked after answer is displayed, clear num2 (verify logic if tama)
// 4. clear button
// 5. round offs
// 6. error handling during division by 0
// 7. decimal button functionality
// ADDITIONAL FEATURES ONLY!: can push to main after #7
// 8. keyboard support
// 9. backspace button => undo one

