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
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
    }
}

let num1 = "";
let num2 = "";
let operation = "";
let getNum1 = true;
let display = document.querySelector('.display p');
let numBtn = document.querySelectorAll('.num');
let optBtn = document.querySelectorAll('.opt');
let symbol = document.createElement('span');

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


