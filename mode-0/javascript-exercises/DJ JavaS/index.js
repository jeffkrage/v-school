let mHover= document.getElementById('box')

mHover.addEventListener('mouseover', function() {
    box.style.backgroundColor = 'blue'
})
mHover.addEventListener('mouseout', function () {
    
})

mHover.addEventListener('mousedown', function () {
    box.style.backgroundColor = 'Red'
})

mHover.addEventListener('mouseout', function () {
    
})
mHover.addEventListener('dblclick', function () {
    box.style.backgroundColor = 'green'
})
mHover.addEventListener('mouseout', function () {
    
})
mHover.addEventListener('wheel', function () {
    box.style.backgroundColor ='orange'
})
mHover.addEventListener('mouseout', function () {
    
})


document.addEventListener("keydown", function(event) {
    if (event.keyCode === 66) {
        document.getElementById('box').style.backgroundColor = 'blue'
    } else if (event.keyCode === 82){
        document.getElementById('box').style.backgroundColor = 'red'
    } else if (event.keyCode === 71){
    document.getElementById('box').style.backgroundColor = 'green'
    } else if (event.keyCode === 79){
        document.getElementById('box').style.backgroundColor = 'orange'
    } 
})
 
 