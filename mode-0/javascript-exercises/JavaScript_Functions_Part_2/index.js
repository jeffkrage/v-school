//  Functions Part 2

// function sum(num1, num2){  // Paraments (  ) are the place holder labels we are giving when we declare the funtcion
//     return num1 + num2
// }

// Calling a function (execute a function) how do you make it run?
//  sum(10, 5)  // Arguments are actually feeding in to have the function executed
// is a set of symbols () now you have to name the function 
// sum() now you need to send in the data it is going to represent
// sum is the function name whatever you want to call it.()
// console.log(result);
function sum( num1, num2){
    return num1 + num2   // return means stop the function
}
console.log(sum(10,5))

// function myFunc (data){
//     console.log(data);
// }

// myFunc(1)  // number
// myFunc('string') //string
// myFunc(true) // boolean
// myFunc ([1, 2, 3, 4]) // array
// myFunc({name:'joe'}) // object

// 
// function loopThroughArr(array){  // We have a function  with a name and a parameter () and give me an array when you are going to use me.
//     for (let i = 0; i < array.length; i++) { // set up a for loop, make sure to loop through this array
// console.log(array[i]);  // then I will console everything within that array
// // console.log(array[i]);   for here you could write an if else statement
//     }
// }

// loopThroughArr([1, 2, 3, 4, 5, 6])