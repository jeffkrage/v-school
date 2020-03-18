// querySelector
// Select a single element from the page. (Returns the first element it finds that matches the query)
let result = document.querySelectorAll("ol#favorite-things >li")
console.log(Array.from (result))

for (let i = 0; i < result.length; i++) {
    result[i].textContent = "** REDACTED **"
    
}


// querySelectorAll
// Select all elements from the page that match the query.