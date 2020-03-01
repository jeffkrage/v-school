// Data Types
    // Primitive
        // String
        // Boolean
        // Number

    // Complex => Boxes
        // Array
        // Object
        
// convention:
    // camelCasing
    // white spacing

var animalNames = ["giraffe", "unicorn", "dog"]
animalNames[animalNames.length] = "frog"


if(animalNames[1] === "giraffe"){
    console.log("hi")
}

// animalNames[0] = "rhino"
// console.log(animalNames)


// Accessing Data
    //             //  0        1       2
    // var names = ["joe", "sally", "moe"]
    // console.log(names[2])

// names.length // 3


var user = {
    name: "Rick",
    occupation: "Scientist",
    age: 70
}

var user2 = {
    name: "Morty"
}

// console.log(user.name)
// console.log(user["name"])

                        // parameter(s) (placeholder)
function fetchUserProperty(obj, prop){
    return obj[prop]
}

                            // argument(s)
console.log(fetchUserProperty(user, "age"))   // 70
console.log(fetchUserProperty(user2, "name")) // Morty





// Why const & let vs var?
    // because

    // const and let are bracket scoped, var is local scope

    function myFunc(){
        if(2 === 2){
            // let name = "joe" // undefined outside of if statement
            var name = "joe" // defined in the whole function
        }
        return name
    }

    console.log(myFunc())

    const name = "jim"
    let age = 10
    age++ // 11, that's totally fine.
    name = "jeo" // can't re-assign a constant, breaks everything.