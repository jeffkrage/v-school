// calculate the average score of the team

// let (johnTeam)
// count = 0
// for (let i = 0; i < johnteam.length; i++) {
//     count = johnTeam[i];
//     return count
    
// }

let johnTeam = (120 + 148 + 104) / 3;
let mikeTeam = (116 + 94 + 123) / 3;
let maryTeam = (97 + 138 + 137) / 3;
console.log(johnTeam, mikeTeam, maryTeam);

// if (johnTeam > mikeTeam) {
//     console.log('John\'s team wins with ' + johnTeam + ' points');
// } else if (mikeTeam > johnTeam ){
// console.log('Mike\'s Team wins with ' + mikeTeam + ' points.');
// } 
// else {
//     console.log('There is a draw!');
// }

if (johnTeam > mikeTeam && johnTeam > maryTeam) {
    console.log('John\'s team wins with ' + johnTeam + ' points');
} else if (mikeTeam > johnTeam && mikeTeam > maryTeam)
{
console.log('Mike\'s Team wins with ' + mikeTeam + ' points.');
} else if (maryTeam > johnTeam && maryTeam > mikeTeam) {
    console.log ('Mary\'s Team wins with ' + maryTeam + ' points.')
} else {
    console.log('There is a draw!');
}

var shopper = {
    firstName= "Jeff",
    

}