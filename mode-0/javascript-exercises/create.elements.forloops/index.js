let powerRangers = [    
    'Jason Lee Scott',
    'Kimberely Hart',
    'Zack Taylor',
    'Trini Kwan',
    'Billy Cranston',
    'Green Ranger'
]

let rangersList = document.getElementById('rangers')


// for (let i = 0; i < powerRangers.length; i++) {
//     let newName = document.createElement('li')
// newName.textContent = powerRangers[i]
// rangersList.append(newName)
    
// }

for (let i = 0; i < powerRangers.length; i++) {
    rangersList.innerHTML += '<li>' + powerRangers [i] + '</li>'
    
}