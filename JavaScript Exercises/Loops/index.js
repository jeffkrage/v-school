
// *********JavaScript loops***************
// a.	What number do I want to start counting at?
// b.	Where do I want it to end?
// c.	Every time it counts how many times to, I want it to increment by; or decrement by;
// SEE WORD DOC FOR MORE INFO

// FIRST LOG.... COUNT TO 99
// for(let i = 0; i < 100; i ++){
//     console.log(i)
//     }
//     
//  LOG STRING I AM GETTING... 10 TIMES.
// for(let i = 0; i < 10; i ++){
//     console.log("I'm getting GOOD at for loops")
//     }
        
// FORMULA IS ADD 2 TO i EACH TIME. IN THIS CASE YOU WILL GET 5 ITEMS 2, 4, 6, 8, 10
    // for(let i = 0; i < 10; i +=2){
    //     console.log(i)
    //     }

    // CREATE AN ARRAY OF FAVORITE FOODS WITH INDEX OF 0 1 2 3
        // let favFoods = ['pizza', 'pasta', 'ice cream', 'banana']
        // if you wanted to console.log favFoods to get the length, you would type 
        // favFoods.length = 4
        // instead of hardcoding 4 for this array which would work you input favFoods.length. This makes it way easier for large arrays

        // console.log([0]);
        // console.log([1]);
        // console.log([2]);
        // console.log([3]);


        // CONSOLE EVERY ARRAY IN FOR LOOPS
        // How many items are in the array? Use the length equation.
//     for (let i = 0; i < favFoods.length ; i++) {
//         console.log(favFoods[i])
//     }
//   this will procduce the [ 4 foods, 4 times run formula for further questions]
// How do I get each individual item. If you use [0] then it will produce pizza 4 times.
// if you put in favFoods [i] represents each index #. Then it will hit the array 4 times based on the .length of the array

// HOW WOULD I GET ONLY EVEN NUMBERS?
// let numbers = [1, 2, 3, 4, 5, 6] 

// for(let i = 0; i < numbers.length; i++ ) {
//     if(numbers[i] % 2 === 0){
//         console.log(numbers[i])
//     }
// }
// if numbers [i] this will fetch each index
// then you need to add a modulator %= the remaining operator
// using this is  you divide 5/2 the remainder is 1
// you are looking for the closest remaind not the answer but what is leftover  5/2 closet number is 3, so the remainder is 2
// the best way to figure out the modular is go into chrome console and put ie 8 & 2

// WHILE LOOPS
// have the same frame work as for loops but only use conditions whatever your write in { } will be repeated.
// insted of giving it a starting and stopping point. you give it a condition like 'true'
let count = 0

while(count < 10){
    console.log('hi')
    count++
}