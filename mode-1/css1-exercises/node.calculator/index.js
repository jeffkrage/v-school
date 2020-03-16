 let readlineSync = require ('readline-sync');

// let num1 = (readlineSync.question (' What is your firstQuestion number?'))
// let num2 =  (readlineSync.question ('What is your second number?'))
// decide the operation how are you going to tell the script to say add, sub, etc.
// let operation = [ 'add', 'mul', 'div', 'sub']
// let operator = readlineSync.keyInSelect(operation, 'Choose one operation')


// function () {
//     if (operation === 0){
//         aNum(num1,num2)
//     } else if (operation === 1){
//         mNum(num1, num2)
//     } else if (operation === 2){
//         sNum (num1,num2)
//     } else  {
//         return dNum;
//     }
// } 

// console.log(aNum (num1, num2));

// function aNum ( num1, num2 ) {
//     return num1 + num2
// } sNum

// console.log(aNum(5, 7 ));

// function mNum(num1, num2) {
//     console.log (num1 * num2)
// }

// console.log(mNum(6,5));

// function dNum(num1, num2) {
//     return num1 / num2
// }
// console.log(dNum(30, 2));

// function sNum( num1, num2 ) {
//     return num1 - num2
// }
// console.log(sNum(32, 8));



// // I need FOUR functions 
// // 1. that ADDITION
// // 2. that MULTIPLIES
// // 3. that DIVIDES
// // 4. that SUBTRACTS
// // Write a function now that does all this data and puts it into a if then statement ie if addition then run addition function
// // PROMPT should be written to ask user to Please enter first number, please enter second number , please enter the operation to perform. Print console The result is: [ the result ]


function sum( num1, num2 ) {
     return num1 + num2
 }
 function multiply( num1, num2 ) {
    return num1 * num2
}
 function divide( num1 ,num2 ) {
    return num1 / num2
 }
 function neg(num1, num2)  {
     return num1 - num2
 }
 let firstQuestion= Number (readlineSync.question("Please Enter Your First Number = "))
 let secondQuestion = Number(readlineSync.question("Please Enter Your secondQuestion Number = "))
 let operation = [ 'add', 'mul', 'div', 'sub']
 let operatorQuestion = Number (readlineSync.keyInSelect(operation, 'Choose one operation'))

 
 if (operatorQuestion === 1) {
   console.log(sum(firstQuestion,secondQuestion))
} else if (operatorQuestion === 2) {
    console.log(multiply(firstQuestion,secondQuestion))
 } else if (operatorQuestion === 3) {
     console.log(divide(firstQuestion,secondQuestion))
 } else if(operatorQuestion === 4){
    console.log(neg(firstQuestion,secondQuestion))
 }

