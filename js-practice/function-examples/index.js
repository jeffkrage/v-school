// functions
// function funcName (parameters){
//   return
// }
// funcName(argument)
function toaster (slot1, slot2){
    if(slot2){
      return slot1 + ' and ' + slot2 + ' are toasted'
    }
    return slot1 + ' is toasted'
  }
  toaster('bread', 'waffle') // this is us leaving our toasted items in the toaster
  const toastedStuff = toaster('bread', 'waffle') // this is us grabbing the 'returned/toasted' items out of the toaster to use
  console.log(toastedStuff)
  // for loops
  // while loops
  // if statements
  // condition - something that returns true or false
  // 2 > 3 // false
  // 1 === 1 //true
  // 2 === '2' //false
  // 3 
  // falsey
  // null
  // undefined
  // NaN
  // ''
  // 0
  // false 
  // 2 > 3
  // truthy
  // all data that doesn't explicitly result as false or is not falsey
  // if(true){
  //  console.log('hi if')
  // }
  // let totWhile = 0;
  // while(totWhile < 10){
  //   totWhile++
  //   console.log(totWhile, 'total While')
  // }
  // for(let i = 0; i < 10;i++){
  //   console.log(i, 'total For Loop')
  // }
  const animals = ['bird', 'cat','mouse']
//   console.log(animals[0])
//   console.log(animals[1])
//   console.log(animals[2])
  for(let i = 0; i < animals.length; i++){
      // console.log(animals) 
      console.log(i) 
      console.log(animals[i])
  }
//   for(let i = 0; i < 10; i++){
//     console.log(i)
//   }