// let firstName ='John';
// let age = 28
// console.log(firstName + ' ' + age);

// // or use coercion and type it out like this.

// let job, isMarried;
// job = 'teacher';
// isMarried = 'false';

// console.log(firstName + ' is a ' + age + ' year old ' + job + ". Is he married? " + isMarried);

// // variable mutation
// age = 'twenty-eight'
// job = 'driver'


let firstName ='John';
let age = 16
//Ternary Operator and Switch Statements


//This is the Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.' );

let drink = age >= 18 ? 'beer': 'juice';
console.log(drink);

// Or write it as an if else statement
//  if (age >= 18) {
// let drink ='beer';
//  } else {
//      let drink = 'juice';
//  }

// Switch Statement compaires the job to each of the different cases.

let job = 'snwe'
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drivers an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
    default:
        console.log(firstName + ' does something else.');
        
}
age = 22
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.')
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.')
        break;
    default:
        console.log(firstName + ' is a man.');
}

