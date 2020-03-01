// count the number of computers there are in an array
// to do this I think we need to , use a standard for loop,  count all the items then idenify the items named computer in the array then I need to count the item named computer. This will be done with an if statement
// As I am looping through the string, "computer"

// const office count);

// function People(name, age, gender){
//     this.name = name,
//     this.age = age,
//     this.gender = gender
// }
// const person1 = new People("Mike", 12, "male")
// console.log(`Hello I am ${person1.name} and I am ${person.age} years old.`);
// const person2 = new People("Madeline", 80, "female")
// console.log(person1);
    
// loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.
// Go through the array and determine who is old enough. So I think I would use an If Else statement

// loop through peoplewhowanttoseemadmaxfuryroad

// find if person is older than 18
    // if older than 18 console.log('old enough')
    // else if they are younger than 18 console.log('not old enough)

const peopleWhoWantToSeeMadMaxFuryRoad = [
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
    const age = peopleWhoWantToSeeMadMaxFuryRoad[i].age;
    const nameOfPerson = peopleWhoWantToSeeMadMaxFuryRoad[i].name
    const genderOfPerson = peopleWhoWantToSeeMadMaxFuryRoad[i].gender


    // if gender is male than and mike is old enough let HIM in.  If gender is female and is old enough let HER in. Else if gender is  male and  is not old enough 'don't let HIM in, if gender is not enough don't let HER in.
    if (age >= 18 && genderOfPerson === 'male') {
        console.log(nameOfPerson + " is old enough to see Mad Max, let HIM in")
    } else if (age < 18 && genderOfPerson === 'Male'){
        console.log(nameOfPerson + " is not old enough to see Mad Max, don't let HIM in")
    } else if (age >= 18 && genderOfPerson === 'female') {
        console.log(nameOfPerson + " is old enough to see Mad Max, let HER in")
    } else if (age < 18 && genderOfPerson === 'female'){
        console.log(nameOfPerson + " is not old enough to see Mad Max, don't let HER in")
    }

}
// The assignment build upon the last question and at the person's name if front of Is old enough else not old enough.
// Log to the console a personalized message like:
// Mike is not old enough to see Mad Max or
// Madeline is old enough to see Mad Max.

// Building on last assignment Check to see IF the movie goer is a male or female for an even more personalized message.

// for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     const oldEnough = peopleWhoWantToSeeMadMaxFuryRoad[i].age;
//     const nameOfPerson = peopleWhoWantToSeeMadMaxFuryRoad[i].name
//     const genderOfPerson = peopleWhoWantToSeeMadMaxFuryRoad[i].gender

//     if (oldEnough >= 18 && genderOfPerson === 'male') {
//         console.log(nameOfPerson + " is old enough to see Mad Max Fury Road, let HIM in")
//     } else if (oldEnough >= 18 && genderOfPerson === 'female') {
//         console.log(nameOfPerson + " is old enough to see Mad Max Fury Road, let HER in")
//     } else if (oldEnough < 18 && genderOfPerson === 'male') {
//         console.log(nameOfPerson + " is not old enough to see Mad Max Fury Road, don't let HIM in")
//     } else if (oldEnough < 18 && genderOfPerson === 'female') {
//         console.log(nameOfPerson + " is not old enough to see Mad Max Fury Road, don't let HER in")
//     }
// }