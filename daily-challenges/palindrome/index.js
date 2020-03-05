// Write a function that accepts a string as an argument and returns true if the string is a palindrome (the string is the same forward and backward), or false if it is not.

// A string is still considered a palindrome despite letter capitalization, spaces, or punctuation.


function isPalindrome(str){
    // 1st option - figure out if first letter is same as last, second the same as second, ect
    // iterate over str
        // figure out how to get at the first and last at the same time, ect 
        // if statement to see if frist === last ect, 
            // if true => move on to the next 
            // if false => return false
    let back = str.length
    for(let i = 0; i < str.length; i++){
        back--
        if(str[back] !== str[i]){
            return false;
        }
    }
    return true;
    // return true
    // 2nd option - compare reversed string to string. 
    // ternary 
    // return bool
}
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("kayak"));  // true
console.log(isPalindrome("palindrome"));  // false
// isPalindrome("Star Rats!");  // true
// isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");  // true
// isPalindrome("rats live on no evil star");  // true