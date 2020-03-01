let button = document.getElementById('button')

function handleButtonClick() {
    console.log("The button was clicked!");
}

button.addEventListener('click', handleButtonClick)

document.getElementById('header').addEventListener('dblclick', function () {
    document.body.style.background = 'firebrick'
})

// button.removeEventListener('click', handleButtonClick)

// document.getElementsByName('Thing')[0].addEventListener('change', doThing);

// function doThing() {
//     alert('Horray! Someone wrote " ' + this.value + ' " !')
// }


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}