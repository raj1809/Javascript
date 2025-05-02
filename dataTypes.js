// JavaScript has 8 Datatypes
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object

// The Object Datatype
// The object data type can contain both built-in objects, and user defined objects:

// Built-in object types can be:

// objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.

//  examples

// Numbers:
let length = 15
let height = 1.8

// Strings:
let name = "King"
let city = "New York"

// Boooleans:
let x = true
let y = false

// Object:
const person = {name: "Ricky", age: 22, city: "Monaco"}

// Array object:
const cars = ["BMW", "Volvo", "Mahindra"]

// Date Object:
const date  = new Date()
console.log(date);

// When adding a number and a string, JavaScript will treat the number as a string.
let x1 = 16 + "Volvo";
console.log(x1);

let x2 = "Volvo" + 16;
console.log(x2);

let x3 = 16 + 4 + "Volvo";
console.log(x3);

let x4 = "Volvo" + 16 + 4;
console.log(x4); // since the first operand is a string, all operands are treated as strings.

//JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
let x6;       // Now x is undefined
x6 = 5;       // Now x is a Number
x6 = "John";  // Now x is a String

// JavaScript Strings
// A string (or a text string) is a series of characters like "John Doe".

// Strings are written with quotes. You can use single or double quotes:
// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';

// JavaScript Numbers
// All JavaScript numbers are stored as decimal numbers (floating point).

// Numbers can be written with, or without decimals:

// With decimals:
let y1 = 34.00;

// Without decimals:
let y2 = 34;

// Exponential Notation
// Extra large or extra small numbers can be written with scientific (exponential) notation:

let a = 123e5;    // 12300000
let b = 123e-5;   // 0.00123

// JavaScript Booleans
// Booleans can only have two values: true or false.

// let c = 5;
// let d = 5;
// let e = 6;
// (c == d)       // Returns true
// (c == e)       // Returns false

// The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.

// The typeof operator returns the type of a variable or an expression:

typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"

// Undefined: In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
let car;    // Value is undefined, type is undefined

// Empty Values: An empty value has nothing to do with undefined.
let car1 = "";    // The value is "", the typeof is "string"

console.log(5 == '5');     // ?
console.log(5 === '5');    // ?

let score = 20;
score  += 10
console.log(score);

// ternary operator in javascript
// condition ? expressionIfTrue : expressionIfFalse
let age = 20;
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult)

age = 15;
isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult)

let num = 10;
let type = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(type)
