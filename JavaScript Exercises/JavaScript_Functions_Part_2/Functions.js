// Write a function that accepts two numbers as parameters, and returns the sum.



// If X is the biggest number return x
// If y is the biggest number return y
// If z is the biggest number return z

function myFunction (x, y, z) {
        if (x > y && x > z) {
            return x + (" is the greatest")
    } else if (y > x && y > z){
            return y + (" is the greatest")
    } else  {
        return z + (" is the greatest")
    }
} 
console.log (myFunction(1, 5, 9));

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd")
// Function with a parameter  function myFunction () and the parameter returns whether that number is even or odd


// Write a function that accepts a string as a parameter. () if the length of the string is less than or equal to 20 characters return the string (String +string) If more than 20 characters (string) + (string)

function loopTwenty(str1){
        if (str1.length  <= 20){
            console.log(str1+str1)
        }if (str1.length > 20) {
            x = str1.length/2
           var xyz = str1.substring(0,x)
            console.log(xyz)
        } 
    }
    


loopTwenty("hellhjgkghigohujiyjuhoygugyuhi", "goodbye")
