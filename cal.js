const calculator = document.querySelector(".calculator");

let variableFirst = 0;
let variableSecond;
let operation = "";
let display = "";
let secondDisplay = "";
let intialCal = true;


/*
calculator.addEventListener("click", e => 
    {console.log(e.target)
    console.log("clicked")})
*/

function addGlobalEventListener(type, selector, callback, parent = document){
    parent.addEventListener(type, c => {
        if (c.target.matches(selector)){
            callback(c)
        }
    })
}

const calc = document.querySelector(".calculation")
const calcHistory = document.querySelector(".perviousCalculation")

function updateDisplay(){
    console.log("updateDisplay was triggered");
    display += numValue;
    calc.textContent = display;
}

addGlobalEventListener("click", ".operator", e =>{
    operation = e.target.dataset.value;
    console.log(operation);
})

addGlobalEventListener("click", ".numpad", e =>{
    numValue = e.target.dataset.value;
    updateDisplay();
    console.log(numValue);
})



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


/* A calculator operation will consist of a number, an operator, and another number. 
For example, 3 + 5. Create three variables, one for each part of the operation. 
You’ll use these variables to update your display later. */