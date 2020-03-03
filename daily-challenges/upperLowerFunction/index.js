//Write a function called antiCaps, which accepts a string and manipulates it as follows.

// Uppercase characters will become lowercase.
// Lowercase characters will become uppercase.
// antiCaps('Hello')  // hELLO
// antiCaps('racEcar')  // RACeCAR
// antiCaps('bAnAnA')  // BaNaNa

// Change string datatype to an array
// immutable string is now a mutable array
//split method: argOne" where do you want to split it (string)

const chaArr = str.split('')
console.log(charArr);
const newCharArr = charArr.map( char => { 
    if (char.toUpperCase() === char) {
        return char.toLowerCase ()
    } else {
        return char.toUpperCase ()
    }

})


function antiCaps (str){
    return str [3]
} 
antiCaps('hello')
console.log(antiCaps);