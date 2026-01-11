// JavaScript variables are containers for data
// Variables are labels for data values
// Variables are identified with unique names called identifiers
// Names can be short like x, y, z
// Names can be descriptive age, sum, carName

const country ="USA" //  const values cant be changed
accountEmail =  "test@test.com"
accountPassword = "123ERT"
accountCity = "NYC"
let accountState
console.log(accountEmail)

console.table([accountCity, accountEmail, accountPassword, accountState]) // to print into table

// Variables declared with let have Block Scope
// Variables declared with let must be Declared before use
// Variables declared with let cannot be Redeclared in the same scope

{
    let x
}
// x cant be used here

  // let x = john 
// let x = test // cant redeclare

// Redeclaring a variable with let, in another block, IS allowed:

let x = 22
{
    let x  = 25
}

{
    let x = 44
}

// Using a let variable before it is declared will result in a ReferenceError:
// carName = "Toyota"
// let carName = "BMW" // this is not allowed 

// Variables defined with const cannot be Redeclared or Reassigned
// Variables defined with const have Block Scope

// Always declare a variable with const when you know that the value should not be changed
// Use const when you declare: A new Array, A new Object, A new Function, A new RegExp

// You can change the elements of a constant array:

const cars = ["TATA", "MG"]
cars[0] = "Toyota"
console.log(cars);

cars.push("Audi")
console.log(cars);

//But you can NOT reassign the array:
const fruits = ["apple", "orange"]
// fruits = ["Grapes", "Kiwi"] // Error --> TypeError: Assignment to constant variable

// You can change the properties of a constant object:
const car = {type:"Fiat", model:"A1", color:"black"}
console.log(car);

car.color = "red" // change a property
console.log(car);

car.owner = "king" //  add a property
console.log(car);

// But you can NOT reassign the object:
// const car = {type:"Fiat", model:"500", color:"white"};
// car = {type:"Volvo", model:"EX60", color:"red"}    // ERROR

