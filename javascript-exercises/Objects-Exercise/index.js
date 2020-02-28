const house = {
    type: 'ranch',
    levels: 1,
    isThereGarage: 'True',
    address: {
        street: '1707 Wade St',
        city: "Okoboji",
        houseColor: "red",
        color: function () {
            console.log('I am the function!')
        }
    }   
}

console.log(house.address.houseColor);    

    
