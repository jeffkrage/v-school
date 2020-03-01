// create a for loop that iterates 101 numbers (from 0-100).
// if the current iteration is an odd number print Odd to the console, otherwise print Even
// create a loop from 0 < 101 so it runs through 0-100. Then write a code for to pull odd or even numbers this is done through the modular % 2 === 1 then console what the answer is and print odd or even.

// for (i = 0; i < 101; i++) {
//     if (i % 2 === 1) {
//         console.log(i  + ' odd');
      
//     } else {
//         console.log(i + ' even');
       
//     }
//         }
    

        // imagine you have a button that toggles  a light on and off. Loop through the following array of numbers and toggle the button the number of times for each number.  The array [2, 3, 2 ] would toggle the button 7 times.    

        // calls for  a For Loop with an array. Add each item array number up.  The light is off to start and log console on or off at the end. If there is an odd number of items in the array then  light is on, if there is an even number of items in the array then light is off.
         let switchFlips = [ 2, 6, 435, 4, 3]
         let count = 0
        for (let i = 0; i < switchFlips.length; i++) {
            count += switchFlips[i]
        }
        if(count % 2 === 0){
            console.log('Light is off');
        } else {
            console.log("Light is ON");
        }
            