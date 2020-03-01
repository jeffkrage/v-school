var shopper = {
    firstName: "John",
    lastName: 'smith',
    age: 27,
    hair: "brown",
    isShopper: true,
    address: "Iowa", 
    groceryCart: ['orange', 'apple', 'banana', 'grape'],
    shopperInfo: function () {
        // return `Today ${this.firstName} ${this.lastName}`
        return 'Today ' + this.firstName + ' bought an ' + this.groceryCart[0] + ' and a ' + this.groceryCart[2];
    }
}
console.log(shopper.shopperInfo())

