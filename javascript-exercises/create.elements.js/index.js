// it is a method, you are creating an element. Creating the element doesn't put it on the page at all. In order for it to log. I need to create a variable in order to save it and put it on the page. Need to find the parent of the list is too append.

let newLi = document.createElement('li') 
newLi.textContent = '3'


var myList = document.getElementById('my-list')
// myList.append(newLi)
myList.prepend(newLi)

let newP = document.createElement('p')
newP.textContent = 'V School Rocks!'
document.body.append(newP)
newP.style.textAlign ='center'
newP.style.fontSize = '30px'
document.body.append(newP)