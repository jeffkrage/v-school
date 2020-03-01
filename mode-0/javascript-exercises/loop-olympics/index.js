//Write a for loop that prints to the console the numbers 0 through 9.  Start the index at 1 = intial expression, what is the condition, I am indexing 1 through 10 and I am incrementing by 1 until I get to 10

//   let s= " ";
// for (  i = 1; i < 10; i += 1 ) {
//     s += i + " ";



// }console.log(s);

//Write a for loop that prints to the console the numbers 9 through 0.  Start the index at 9 = intial expression, what is the condition = 'I am indexing 9 through 1' and I am incrementing by 1 until I get to 10

// for (let i = 9; i > 0; i -= 1 ) {
//     console.log(i);
// }

// Write a for loop that prints these fruits to the console.
//var fruits = ["banana", "orange", "apple", "kiwi"]  This is an array so, I have to let assign the array a value in the case fruits, then I have to start the intial expression to i = 0 because my indexing starts at [ 0 in an array] then I determine the length of the each value by [i] enclosing each value. then console.log for the answer.

// let fruits = ['banana', 'orange', 'apple', 'kiwi' ];

// for (i = 0; i < fruits.length; i++ ){
// console.log (fruits [i]) + "";
//  }

//Write a for loop that will push the numbers 0 through 9 to an array. A push allows you to easily add items to the end of the array and returns new length.

//  let num = [];
//  for (i = 1; i < 10; i ++ ) {
//      num.push(i);
//  } console.log(num);

//Write a for loop that prints to the console only even numbers 0 through 100.

//  for (i= 0; i <= 100; i+=2) {
//     console.log(i);
//  }

// Write a for loop that will push every other fruit to an array. The first example is of increments, of 2 but in this case it is 

// let fruits = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach']
// for (i=0; i < fruits.length; i+=2) {
//     console.log (fruits[i]);
// }

// let fruit = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach']
// let everyOther =[]
// for (let i = 0; i < fruit.length; i+=2 ){
//     everyOther.push(fruit[i])
// } 
// console.log(everyOther);

//Write a loop that will print out all the names of the people of the people array

// let peopleArray = [{
//         name: 'Harrison Ford',
//         occupation: 'Actor'
//     },
//     {
//         name: 'Justin Bieber',
//         occupation: 'Singer'
//     },
//     {
//         name: 'Vladmir Putin',
//         occupation: 'Politician'
//     },
//     {
//         name: 'Oprah',
//         occupation: 'Entertainer'
//     }
// ]
// const peopleName = [] ;
// const peopleOccupation = [];

// for (i = 0; i < peopleArray.length; i++) {
//     // console.log(peopleArray[i].name)
//     peopleName.push(peopleArray[i].name);
//     peopleOccupation.push (peopleArray[i].occupation);
// }
// console.log(peopleName, peopleOccupation);

// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
let peopleArray = [{
    name: 'Harrison Ford',
    occupation: 'Actor'
},
{
    name: 'Justin Bieber',
    occupation: 'Singer'
},
{
    name: 'Vladmir Putin',
    occupation: 'Politician'
},
{
    name: 'Oprah',
    occupation: 'Entertainer'
}
]
const peopleName = [] ;
const peopleOccupation = [];

for (i = 0; i < peopleArray.length; i+=2) {
// console.log(peopleArray[i].name)
peopleName.push(peopleArray[i].name);
peopleOccupation.push (peopleArray[i].occupation);
}
console.log(peopleName, peopleOccupation);

