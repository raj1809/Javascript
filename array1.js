const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["flash", "superman", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1])

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros);

// can use spread operator to merge arrays

const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);

const another_array = [1, 2, 3, [4, 5,  6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("King"));
console.log(Array.from("King"));

let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score, score1, score2));

// Accessing the Last Array Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);


const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits1[fruits1.length - 1];
console.log(fruit);

// Looping Array Elements
// One way to loop through an array, is using a for loop:


const cars = ["BMW", "Mercedez", "Volvo", "TATA"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

console.log("---------------");

// We can also use the Array.forEach() function:
 const bikes = ["Yamaha", "BMW", "Ducati", "TVS"];
 bikes.forEach(function(bike){
    console.log(bike);
 })

 console.log("---------------");

//You can also use arrow functions with forEach:

cars.forEach(car => console.log(car))