//  If / Else Statments

const firstName = "John"
const martialStatus = 'Single'

if (martialStatus === 'Married') {
    console.log(firstName + ' is married.');
    } else {
    console.log(firstName + ' will hopefully marry soon');
    }

 const isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married.');
    } else {
    console.log(firstName + ' will hopefully marry soon');
    }

    const massMark = 78; // pds
    const heightMark = 1.69;

    const massJohn = 95;
    const heightJohn = 1.95;

    const BMIMark = massMark / (heightMark * heightMark);
    const BMIJohn = massJohn / (heightJohn * heightJohn);
    
    if (BMIMark > BMIJohn) {
        console.log('Mark\'s BMI is higher than John\'s.');   
        } else {
            console.log('John\'BMI is higher than Mark\'s');
        }
    