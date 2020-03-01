 if ( 5 > 3)
 console.log("is great than");

// Objective write an if statement that prints "is the length" if the length of "cat" is 3 ??? what am I trying to do? 1st get the length of the word cat, then write an if statement = to 3
    const str = 'cat';
    console.log(str.length);

    if (cat = 3 ) 
    console.log('is the length ' + cat);

    // Objective: write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal. What am I trying to do? write a simple if else statement. NOTE: These are strings so I need brackets if they were numbers then I would not

    if ('cat' === 'dog') {
        console.log("are the same");   
    } else if ('cat' =='dog') {
        console.log('are not the same');
    } else {
        ('are not the same')
    }
        // Objective: Write an Object oriented if/then statement <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough 18 or older and if they are not older than 18.  How do you idenify B? A: use the length str
 const person = {
     name: "Bobby",
     age: 12,
 }

 if (person.age >= 18) {
     console.log("is allowed to go to the movie.");  
     } else {
         console.log('is not allowed to go to the movie.');
     } 
    //  Now I need to pull the Letter B out of Bobby and only allow that letter to go to the movie
if ( person.name[0] === "B") {
    console.log("are allowed into the movie if name starts with " + person.name.charAt(0));
} else {
    console.log("are not allowed into the movie because name doesn't start with b");
}
// Now I need to only allow them into the movie if there name starts with a B and are older than 18. How do I idenify B and idenify if they are over the age of 18.

if ( person.age >= 18 && person.name[0] === "B") {
    console.log('is allowed to go to the movie.');
} else {
    console.log('are not allowed to go to the movie.');
}

    // Write an if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without typing checking, and prints "not equal at all" if it doesn't print the other stuff. There are 3 phases to this if else statement. #1 type print if 1 = "1" 2. "loosely" the operative word print loose or abstract if 1 = 1

    if (1 == "1") {
        console.log('strict');
     } else if (1 !== "1") {
         console.log('"loose" or "abstract"');  
    } else {
        console.log('not equal at all');
}
if (1 <= 2 && 2 === 4){
    console.log("yes");
    } else {
        console.log('no');
    }

// 1. Write an if statement that checks to see if "dog" is a string. How do I get define a string? Use typeOf but I need to write an if statement so what is the step(s) to define this? What I need type of returns a data type string and then Use typeOf to determine if true.

const animal = 'dog'

if ('dog' === animal) {
    console.log(true);
} else {
    console.log(false);
}

const bool = true

if (true === bool) {
    console.log(true);
} else {
    console.log(false);
}

const num = 1
const undef = "undefined"

if (num === 1) {
    console.log(num);
} else {
    console.log(undef + "undefined");
}

const equat= 's'
const numb = 2
if ('2' == numb && numb > 12) {
    console.log(numb) + ' is greater than 12';
} else {
    console.log(numb + ' is not greater than 12');
}

var myNum = 11;
if (myNum % 2 === 0) {
    console.log(myNum + ' is Even');
} else if (myNum % 2 === 1) {
    console.log(myNum + ' is Odd');
    
}
// Write your ternary here to log if `myNum` is odd or even.