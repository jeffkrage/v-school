// // Array can be a list of strings, numbers, booleans, and more the "more" will come later. NOTE: Arrays are indexed starting at 0. So it is 0/1/2 not 1/2/3 

// // Now we need to go over first the list inside the array. What is a string?  A string.....
// // is just text. Now how a string works. Solve this string. How would you write (I come first.) and (You come second.)  How is this done? 1st we need to DEFINE the VALUE of the STRING. Let "my String" = myStr 'Note the 'camelCase structure' upperCase on second word and no space between the words. Also, note the syntax used to idenify the string... easy to read and figure out. You have to remember that when writing code with a company in a team format if you get sick, quite, etc. another teammate has to take over your coding. How would you feel if you had to take over the code and had no idea what it meant.  Now continuing with defining the VALUE of the STRING let myStr = "I come first. " now we are going to add "You come second" You are printing out myStr + " You come second."

// let myStr = 'I come first.' 
// console.log(myStr + ' You come second.');


// // For Loop to (log) " 'clg' tab " all Strings' in an Array. What a For Loop does. Think of it a a wheel. It keeps going around and until you tell it to stop. It is being told how to stop in the condition. "i" is defined by let

// // Another definition: It executes a block of code a number of times. It uses a counter, whose value is first initialized and then its final value is specifed. Let i = initializer, i <  is less than "arr" this value has to be called that is why you put const arr. i < arr.length, this is done to count the block of code in the array. 

// // Assignment Write a loop for all the strings in the Array.
// // const numbers = [ 1, 2, 6,]
// // for (let i = 0; i < numbers.length; i++) {
// //    console.log(numbers[i]);
// // }


// // const numbers = [1,2,9,7,6,3,2,4,6]
// // for(let i = 0; i < numbers.length;i++){
// //   console.log(numbers[i])
// // }
// // console.log(numbers[2])


// // write a loop that  counts all instances of the word cat in an array. Where to begin. 1. Define the array
// // const animals = ['dog', 'cat', 'mouse', 'cat', 'horse']  // defined here
// // // make a for loop... for what. 
// // let count = 0   // Count the instances
// // for(let i = 0; i < animals.length;i++){
// //   // check if word is cat
// //   if(animals[i] === 'cat'){
// //     count++
// //   }
// // }
// // console.log(count)


// // write a for loop that counts all instances of the string "cat"


// // const animals = ['dog', 'cat', 'mouse', 'cat', 'horse'] 
// // let count = 0
// // for(let i = 0; i < animals.length; i++ ){
// //     if(animals[i] === "cat"){
// //         count++
// //     } console.log(count);
// //    }

//    //combine components: Write a function that 
// // takes an array and counts the instance of "cat"
// // your array will return the count
// // function counter(arr){
// //    for(let i = 0; i < arr.length; i++ ){
// //        if(arr[i] === "cat"){
// //            count++
// //        }
// //    }
// // }
// // console.log(counter(["dog", "cat", "mouse", "cat", "dog"]))



// // JS Data Types

// // Primitive
//    // String  'cat'  
//       // const animal = "cat"
//    // Number  10
//    // const age = 28 
//    // Boolean  true or false
//    //  let isAlive = True
//    // let hasDoneTaxes = false
// // Complex   
//   // Array  simply put  an index of a "string" or number  [ 1, 2, 3]
//    // number [3] =undefined  number [1] = 2
//   // Object -explains a singular item in depth
//       //   let person = {
//       //       name: 'Steve',
//       //       age: 21,
//       //       hairColor: "Brown",
//       //       isAlive: true
   
//       // }

//       // Exercise 29
//       // let name = 'Steve'
//       // let age = 21
//       // let friends = ['Sam', 'Steve', 'Doug']
//       // let isThristy = true
//       // let address = {
//       //    city: 'SLC',
//       //    state:'UT',
//       //    zip: 84111,
//       //    isCorrect: true
//       // }

//       // Exercies 31
//       // let myNumbers = [1, 2, 3, 4, 5]
//       // let colors = ['blue', 'red', 'green', 'brown'] what is the index of colors  0, 1, 2, 3
//       // practice get the color 'Green'
//       // console.log(colors [2]) = 'Green'  console.log(colors [4]) = undefined 

//       // length
//       // Arrays have a predined property
//       // console.log(colors.length)  array of 100 the index is 99

//       // String also have length property
//       // let name = 'Joe'
//       // console.log(name[1]);  prints o


// //       let namesArray = ['Steve', 'John', 'Betty', 'Morty', 'Rick', 'Alan', 'Sarah']
// //       // 1. How would you console.log() Betty console.log(namesArray[2]);
// //       // 2. How would you  console.log() Sarah? console.log(namesArray[6]);
// //       // 3. What is the index of 'Steve' index [0]
// //       console.log(namesArray.length)   
     


// //       // Exercise 40 
// //       //  find 2 real world things you can describe in the form of an object.
// // // snowboard and skis

// // const snowboard = {
// //    brand: 'Salomon',
// //    size: 164,
// //    isSki: false, 
// //    types: ['All Mountain', 'Park', 'downhill'],
// //    locations: {
// //       city: 'Vail',
// //       state: 'CO'
// //    }

// // }
     
// //      console.log(snowboard.locations.state);
// //      console.log(snowboard.locations.city);

// //    //   Bracket notation
// //    console.log(snowboard["brand"]);
// //    console.log(snowboard['locations']['city']);

// //    const resort = {
// //       area: 'Park City',
// //       numArces: 20000,
// //       isHuge: false,
// //       allows: ['skiers', 'snowboards'],
// //       otherLocationsForPass: {
// //          mountain: 'Breckinridge',
// //          state: 'CO'
// //       }

// //    }
// //    console.log(resort.area);
// //    console.log(resort.otherLocationsForPass.mountain);

// //    console.log(resort['area']);
// //    console.log(resort['otherLocationsForPass']['state']);

//    // Grocery Cart Assignment
// // write a program that a shopper object. Include at least one property with each of the following data types as values to the properties:
// // String
// // Number
// // Boolean
// // Function (called a "method" when it's inside an object like this. Check out an example for help writing your own,)

// //create an object with a variable name shopper, inside the object include a string, a number, a boolean and function. Make sure to create an Grocery Cart Property that is an Array of items commonly found in a grocery Cart.

//    // let shopper = {   // variable shopper declared
//    //    name: 'John',  // string
//    //    age: 29,    // number
//    //    fruit: ['apple', 'banana', 'grape', 'pear'],
//    //    isFemale: false,   //Boolean
//    //    groceryCart: ['milk', 'butter', 'cheese'], // an array inside the object.
//    //    shopperInfo: function () {
//    //       return this.name + ' ' + this.age;  // run a method inside the array the object.
//    //    }
//    // }

//    // console.log(shopper.shopperInfo())  // print to test your code
     

         
      
//      // Assigment 35 Even/Odd Looping
//      // Create a for loop that iterates through 101 numbers (rom 0-100). If the current iteration is an Odd number, print Odd, to the console, otherwise print, even

//      // create a for loop less than 101

//    //   for (let i = 0; i < 101; i++) {
//    //      if (i % 2 === 1 ) { 
//    //         console.log(i + ' Is odd');
           
//    //      } else 
//    //      { console.log(i + ' Is even');}
        
//    //   }


//    // Assignment 36 Loop thru an Array
//    // loop through the following array and count how many 'Computers' there are log final count.
//    let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
//    let count = 0 
//    for (let i = 0; i < officeItems.length; i++) {
//       if (officeItems[i] === 'computer') {
//          count ++
         
//       }
      
//    } console.log(count);
//    //  const animals = ['dog', 'cat', 'mouse', 'cat', 'horse'] 
//    // let count = 0   // Count the instances
// // for(let i = 0; i < animals.length;i++){
// //   // check if word is cat
// //   if(animals[i] === 'cat'){
// //     count++
// //   }
// // }
// // console.log(count)

//   // loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
// // Go through the array and determine who is old enough. So I think I would use an If Else statement

// // loop through peoplewhowanttoseemadmaxfuryroad

// // find if person is older than 18
//     // if older than 18 console.log('old enough')
//     // else if they are younger than 18 console.log('not old enough)

// const peopleWhoWantToSeeMadMaxFuryRoad = [
//    {
//        name: 'Mike',
//        age: 12,
//        gender: 'male'
//    }, {
//        name: 'Madeline',
//        age: 80,
//        gender: 'female'
//    }, {
//        name: 'Cheryl',
//        age: 22,
//        gender: 'female'
//    }, {
//        name: 'Sam',
//        age: 30,
//        gender: 'male'
//    }, {
//        name: 'Suzy',
//        age: 4,
//        gender: 'female'
//    }
// ]
// for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//    const age = peopleWhoWantToSeeMadMaxFuryRoad[i].age;
//    const nameOfPerson = peopleWhoWantToSeeMadMaxFuryRoad[i].name
//    const genderOfPerson = peopleWhoWantToSeeMadMaxFuryRoad[i].gender


//    // if gender is male than and mike is old enoughmk let HIM in.  If gender is female and is old enough let HER in. Else if gender is  male and  is not old enough 'don't let HIM in, if gender is not enough don't let HER in.
//    if (age >= 18 && genderOfPerson === 'male') {
//        console.log(nameOfPerson + " is old enough to see Mad Max, let HIM in")
//    } else if (age < 18 && genderOfPerson === 'Male'){
//        console.log(nameOfPerson + " is not old enough to see Mad Max, don't let HIM in")
//    } else if (age >= 18 && genderOfPerson === 'female') {
//        console.log(nameOfPerson + " is old enough to see Mad Max, let HER in")
//    } else if (age < 18 && genderOfPerson === 'female'){
//        console.log(nameOfPerson + " is not old enough to see Mad Max, don't let HER in")
//    }

// }
// The assignment build upon the last question and at the person's name if front of Is old enough else not old enough.
// Log to the console a personalized message like:
// Mike is not old enough to see Mad Max or
// Madeline is old enough to see Mad Max.

// Building on last assignment Check to see IF the movie goer is a male or female for an even more personalized message.

// Bonus Challenge 
// Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button and numbers of times for each number. The array [2, 1, 2] would toggle the button times.

// The light is off to start with . console.log(); whether or not the light is on at the end
// Sample Array 
// [2, 5, 435, 4, 3] // "The light is on"
// [1, 1, 1, 1, 3]   // "The light is on"
// [9, 3, 4, 2]      // "The light is off"

// imagine you have a button that toggles  a light on and off. Loop through the following array of numbers and toggle the button the number of times for each number.  The array [2, 3, 2 ] would toggle the button 7 times.    
// calls for  a For Loop with an array. Add each item array number up.  The light is off to start and log console on or off at the end. If there is an odd number of items in the array then  light is on, if there is an even number of items in the array then light is off.
        
// let switchFlips = [ 2, 6, 435, 4, 3]
//         let count = 0
//        for (let i = 0; i < switchFlips.length; i++) {
//            count += switchFlips[i]
//        }
//        if(count % 2 === 0){
//            console.log('Light is off');
//        } else {
//            console.log("Light is ON");
//        }
           

// let animals =['dog', 'cat', 'mouse', 'cat', 'horse'] 
// let count = 0
// for (let i = 0; i < animals.length; i++) {
//     if (animals[i] === 'cat') {
//         count ++
//     }
// }console.log(count);




function addS (str) {

    return str + "s"

} 

console.log(addS("baloon"));

testArr = [1, 2, 3, 4, 5]

function lastIndex(arr){
    return arr[arr.length - 1]
}

console.log(lastIndex(testArr))


function grade(value, plus) {
    if ( value >= 90){ 
        console.log("A" + plus)
    } else if (90 > value >= 80 ){
        console.log('B'+ plus) 
    } else if (80 > value >= 70 ) {
    console.log('C'+ plus)
    } else if (70 > value >= 60 ) {
    console.log ('D'+ plus)
    } else if (60 > value) {
        console.log ('F' + plus)
        } 

} 
grade(95, '+')

function myNum (x) {
    for (let i = 0; i < 11; i++) {
      
        console.log(x * i);
    }
}
myNum(10)
   
        
function myName (x) {
   
    console.log(x + 2);
    }

myName (2)

