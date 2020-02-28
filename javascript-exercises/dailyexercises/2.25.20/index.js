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
console.log(countStrings(["cat", "cow", "cat"], "cat"))// => 2
console.log(countStrings(["cat", "cow", "cat"], "cow"))// => 1
console.log(countStrings(['mouse', 'horse', 'rat', 'horse', 'horse'], "horse"))// => 3