const calculator = document.querySelector(".calculator");

let operation = null;
let display = "";
let numValue = "";

let current = null;
let previous = null;
let result = null;

function addGlobalEventListener(type, selector, callback, parent = document){
    parent.addEventListener(type, c => {
        if (c.target.matches(selector)){
            callback(c)
        }
    })
}

const calc = document.querySelector(".calculation")
const calcHistory = document.querySelector(".previousCalculation")

function updateDisplay(){
    console.log("updateDisplay was triggered");
    display += numValue;
    current = display;
    calc.textContent = display;
}

addGlobalEventListener("click", ".operator", e =>{
    if (current === null){
        console.log("current was null if is pushed")
        operation = e.target.dataset.value;
        previous = 0;
        current = null;
        display = "";
        calc.textContent = display;
        calcHistory.textContent = `${previous} ${getOperatorString(operation)}`;
    }
    else if (result === null){
        console.log("result was null if is pushed")
        operation = e.target.dataset.value;
        previous = parseFloat(current);
        current = null;
        display = "";
        calc.textContent = display;
        calcHistory.textContent = `${previous} ${getOperatorString(operation)}`;
    }
    else{
        operation = e.target.dataset.value;
        current = null;
        display = "";
        calc.textContent = display;
        calcHistory.textContent = `${previous} ${getOperatorString(operation)}`;
    }
})

addGlobalEventListener("click", ".numpad", e =>{
    numValue = e.target.dataset.value;
    updateDisplay();
})

addGlobalEventListener("click", ".topButton", e => {
    if (e.target.dataset.value === "clearAll"){
        allClear();
    }
    if (e.target.dataset.value === "backspace"){
        backspace();
    }
})

addGlobalEventListener("click", ".equal", e => {
    if (e.target.dataset.value === "equal"){
        console.log("equals was clicked")
        if (operation != null && previous != null && current != null){
            current = parseFloat(display);
            result = operate(getOperatorFunction(operation), previous, current);
            calc.textContent = result;
            calcHistory.textContent = `${previous} ${getOperatorString(operation)} ${current}`
            previous = result;
            display = result;
        }
    }
})

function getOperatorString(stringArg){
    switch(stringArg){
        case "multiply": 
            return "×"
            break;
        case "divide":
            return "÷"
            break;
        case "subtract":
            return "–"
            break;
        case "add":
            return "+"
            break;
        case "modulus":
            return "%"
            break;
    }
}

function getOperatorFunction(stringArg){
    switch(stringArg){
        case "multiply": 
            return multiply
            break;
        case "divide":
            return divide
            break;
        case "subtract":
            return subtract
            break;
        case "add":
            return add
            break;
        case "modulus":
            return modulus
            break;
    }
}


function allClear(){
    console.log("clear was triggered");
    calc.textContent = "";
    calcHistory.textContent = "";
    current = null;
    previous = null;
    result = null;
    display = "";
}

function backspace(){
    display = display.toString();
    display = display.slice(0,(display.length - 1))
    console.log(display);
    current = display;
    calc.textContent = display;

}

function add(argA, argB){
    return argA + argB;
}

function subtract(argA, argB){
    return argA - argB;
}

function multiply(argA, argB){
    return argA * argB;
}

function divide(argA, argB){
    return argA / argB;
}

function modulus(argA, argB){
    return argA % argB;
}

function operate(operator, num1, num2){
    return operator(num1,num2);
}
