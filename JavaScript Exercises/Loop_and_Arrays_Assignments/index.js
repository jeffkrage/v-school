// count the number of computers there are in an array
// to do this I think we need to , use a standard for loop,  count all the items then idenify the items named computer in the array then I need to count the item named computer. This will be done with an if statement
// As I am looping through the string, "computer"

const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer", 'computer'];
var count = 0
for (i = 0; i <= officeItems.length; i++) {
    if (officeItems[i] === 'computer') {
        count += 1
    }
}
console.log(count);

// loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
// Go through the array and determine who is old enough. So I think I would use an If Else statement
function People(name, age, gender){
    this.name = name,
    this.age = age,
    this.gender = gender
}
const person1 = new People("Mike", 12, "male")
console.log(`Hello I am ${person1.name} and I am ${person.age} years old.`);
const person2 = new People("Madeline", 80, "female")
console.log(person1);

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: 'Mike',
        age: 12,
        gender: 'male'
    }, {
        name: 'Madeline',
        age: 80,
        gender: 'female'
    }, {
        name: 'Cheryl',
        age: 22,
        gender: 'female'
    }, {
        name: 'Sam',
        age: 30,
        gender: 'male'
    }, {
        name: 'Suzy',
        age: 4,
        gender: 'female'
    }
]
for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    const oldEnough = peopleWhoWantToSeeMadMaxFuryRoad[i].age;
    const nameOfPerson = peopleWhoWantToSeeMadMaxFuryRoad[i].name


    if (oldEnough >= 18) {
        console.log(nameOfPerson + " is old enough")
    } else {
        console.log(nameOfPerson + " is not old enough")
    }


}
for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    const oldEnough = peopleWhoWantToSeeMadMaxFuryRoad[i].age;
    const nameOfPerson = peopleWhoWantToSeeMadMaxFuryRoad[i].name
    const genderOfPerson = peopleWhoWantToSeeMadMaxFuryRoad[i].gender

    if (oldEnough >= 18 && genderOfPerson === 'male') {
        console.log(nameOfPerson + " is old enough to see Mad Max Fury Road, let HIM in")
    } else if (oldEnough >= 18 && genderOfPerson === 'female') {
        console.log(nameOfPerson + " is old enough to see Mad Max Fury Road, let HER in")
    } else if (oldEnough < 18 && genderOfPerson === 'male') {
        console.log(nameOfPerson + " is not old enough to see Mad Max Fury Road, don't let HIM in")
    } else if (oldEnough < 18 && genderOfPerson === 'female') {
        console.log(nameOfPerson + " is not old enough to see Mad Max Fury Road, don't let HER in")
    }
}