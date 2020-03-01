const button = document.createElement("button") 
button.textContent = 'Test Button'
const body = document.getElementById("box")

body.append(button)
button.addEventListener('click', function(){
    alert ('Alert ME')
})
function createH1() {
    var h = document.createElement("H1");
    var txt = document.createTextNode("H1 element has been created");
    h.appendChild(txt);
    document.body.appendChild(h);
 }