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
let answer = 0;
let display = document.querySelector('.display p');
let numBtn = document.querySelectorAll('.num');
let optBtn = document.querySelectorAll('.opt');
let symbol = document.createElement('span');
let equals = document.querySelector('.equals button');

numBtn.forEach((e) => {
    e.addEventListener("click", () => {
        if (getNum1) {
            display.innerHTML += e.id;
            num1 += e.id;
            console.log(num1); 
        } else {
            display.innerHTML += e.id;
            num2 += e.id;
            console.log(num2);  
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
});


