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

function operate(operator, num1, num2){
    return operator(num1,num2);
}

/* A calculator operation will consist of a number, an operator, and another number. 
For example, 3 + 5. Create three variables, one for each part of the operation. 
You’ll use these variables to update your display later. */

console.log(operate(add, 10, 5));