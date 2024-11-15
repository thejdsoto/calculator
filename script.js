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

let display = document.querySelector('.display p');
let numBtn = document.querySelectorAll('.num')

numBtn.forEach((e) => {
    e.addEventListener("click", () => {
        display.innerHTML += e.id;
    });
})

