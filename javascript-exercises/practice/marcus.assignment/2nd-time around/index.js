// Excericse for JavaScript Data Types

// let name = "string";
// const age = 26;
// const friends = ['Alex', 'Mike', 'John']
// const isThirsty = true
// const address = {
//     city: 'Sioux Falls',
//     state: 'SD',
//     zip: 51351
// }

// let namesArray = ['Steve', 'John', 'Betty', 'Morty', 'Rick', 'Alan', 'Sarah' ]

// // How would you clg    the name Betty?
// console.log(namesArray[2]);
// // How would you clg the name Sarah?
// console.log(namesArray[6]);
// //what is the index of 'Steve  0

// for (let i = 0; i < namesArray.length; i++ ) {
    
//     if (namesArray[i] ==='jeff') {
//         console.log(namesArray[i]);
//     } else {
//         console.log("That name is not here");
//         return
//     }

// }


let jacket = {
    color: "red",
    size: 48,
    isTheRightFit: false,
    brand: {
        state: 'CO',
        city: 'Vail'
    }
}

// console.log(jacket.brand.city);
// console.log(jacket['brand']['city'])


// given  an array  of the strings and a string, count how many instances of that string are in the array

function countStrings(arr, str) {
    //loop  through the array
    let count = 0 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]  === str) {
            // if it is equal to str, add on on to count
            count ++
            // count += 1
            // count = count +1
        }
      // continue loop
    }
    return count
}
// console.log(countStrings(["cat", "cow", "cat"], "cat"))// => 2
// console.log(countStrings(["cat", "cow", "cat"], "cow"))// => 1
// console.log(countStrings(['mouse', 'horse', 'rat', 'horse', 'horse'], "horse"))// => 3

// JavaScript Objects Part 2 exercise

// Create an object with one of each data type including at least 1 method. Call the method to make it execute.
//      The method must use the keyword "this" to reference some part of the object.
    
let car = {
    brand: 'Telsa',
    make: 'Model 3',
    wheels: 4,
    honk: function () {
        console.log(this.wheels);
    }

}
// car.honk ()

// assignment 30 
// Write a program that has shopper as an object. Include at least one property with each of the following data types as values to the properties: string, number, boolean, function, called a "method" an object within an object. In addition, you should add a groceryCart property to your object, which should be an Array of items that can commonly be found in a grocery cart.

// create an object with a declared value of shopper
// need to add ..
// string
// number
// boolean
// function called a method with a declared value of groceryCart


let shopper = {
    name: 'Steve',
    age: 28,
    isAlive: true,
    nameAge: function () {
        return this.name + " " + this.age;
    },
    groceryCart = ['Apples', 'Bananas', 'Pears']

}

console.log(shopper.groceryCart ())



// Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".


for (let i = 0; i < 101; i++) {
    if (i % 2 === 1) {
        console.log(i + "Odd");
        
    }  else {
console.log(i + 'Even');
    };
    
}
