// Conditionals
// Booleans = True / False

if (false)
{ 
    console.log("it is true!");
} else {
    console.log("It is false!");
}
if (2 === 4) {
    console.log("Two is equal to two!");
} else {
    console.log("Two is not equal to four");
}
if (2 === 4) {
    console.log("Two is equal to four!");
} else if (2 === 5){
    console.log("Two is not equal to five");
} else if (2 === 3) {
console.log("Two is not equal to three");
}
else if (2 === 3) {
    console.log("I don't know what's going on");
    }
    // Comparison Operator
    //  >, <, ,<=, >=, ==, ===, !=. 1==

    if ("2" == 2 ) {
        console.log("They are equal");
        
    }
    if ("2" === 2 ) {
        console.log("They are not equal");
        
    }
    /* Logic Operators
    && - and
|| - or
! – not
*/
If (2 === 2  && 2 === 3)// { NOTE: This both needs to be true for the  && operator to work
console.log(It’s working!”)
} else {
console.log(“Its’s not working!”)
}
If (2 === 2  || 2 === 3) //{ NOTE: This both needs to be true for the  && operator to work
console.log(It’s working!”)
} else {
console.log(“Its’s not working!”)
}
If (2 === 2  && 2 !== 3) {
console.log(It’s working!”)
} else {

/* Order of Operations  '  +, -, *, /  '
*/


//Switch Statement 
Var color = “blue”
	
Switch(color) {
          Case “red”:
console.log(“The color is red”)
} //take out then add break  this will stop the code each time
Case “blue”:
console.log(“The color is blue”)
break // if you put break it will stop after every case
Case “yellow”:
console.log(“The color is yellow”)
break
Default: // if none of the cases match it will run this case.
console.log(“The color is not red, blue, or yellow”)
}
