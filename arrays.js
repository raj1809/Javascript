// An array can hold many values under a single name, and you can access the values by referring to an index number.
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

// Spaces and line breaks are not important. A declaration can span multiple lines:
const buses = [
    "Saab",
    "Volvo",
    "BMW"
  ];

// We can also create an array, and then provide the elements:
const bikes = [];
bikes[0]= "Yamaha";
bikes[1]= "Royal Enfield";
bikes[2]= "BMW";

// Changing an Array Element
bikes[2] = "Ducati"

console.log(bikes);

// Converting an Array to a String
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitList = fruits.toString()
console.log(fruitList);

const person = ["John", "Doe", 46];
console.log(person[1]);
 
const man = {firstName:"John", lastName:"Doe", age:46}
console.log(man.firstName);
