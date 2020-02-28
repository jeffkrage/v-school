// innerhtml isn't bad it is just slow with big pages. 
// innerHTML vs textContent

let myList = document.getElementById('my-list')
 // you can use innerHTML to create new 
myList.innerHTML += '<li>3</li>'
document.body.innerHTML += "<p> V School rocks!</p>"