// Strings are for storing text
// JavaScript String Methods

// 1. length 

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

let char =  text.charAt(9)
console.log(char);

let char1 = text.charCodeAt(5);
console.log(char1);

let char2 = text.at(3)
console.log(char2);

// Uppercase and lowercase
let text2 = "Hello david"
let char3 = text2.toUpperCase()
console.log(char3);

let text3 = "HELLO WORLD"
let char4 = text3.toLowerCase()
 console.log(char4);
 
// concatenation

let text4 = "My Contry is"
let text5 =  "Greatest"
let sentence = text4.concat(" ",text5)
console.log(sentence);

//  trim() --> The trim() method removes whitespace from both sides of a string:
// there are methods like trimStart and trimEnd() which removes whitespaces from start and end respectively

let text6 = "             computer       "
let trimmed = text6.trim()
console.log(trimmed);

// padStart() : The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length

let text7 = "5";
let padded = text7.padStart(4,"0");
console.log(padded);

let text8 = "5";
let padded1 = text8.padStart(4,"x");
console.log(padded1);

let numb = 5;
let text9 = numb.toString();
let padded3 = text9.padStart(3,"0");

console.log(padded3);

// The padEnd() method pads a string from the end.
// It pads a string with another string (multiple times) until it reaches a given length.

let newText = "5";
let pad = newText.padEnd(4,"0");
console.log(pad);

// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.

let hello = "Data structures "
let res = hello.repeat(2)
console.log(res);

 // The replace() method replaces a specified value with another value in a string:
 //By default, the replace() method replaces only the first match:
 let test = "Please visit google"
 let  result = test.replace("google", "tesla")
console.log(result);

// To replace case insensitive, use a regular expression with an /i flag (insensitive):

let test1 = "Please visit Microsoft!";
let newTest1 = test1.replace(/MICROSOFT/i, "W3Schools");
console.log(newTest1)

//To replace all matches, use a regular expression with a /g flag (global match):

let abc = "Please visit Microsoft and Microsoft!"
let newAbc = abc.replace(/Microsoft/g, "W3Schools")
console.log(newAbc);

// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
let sen1 = "I love cats. Cats are very easy to love. Cats are very popular."
pri = sen1.replaceAll("Cats","Dogs");
pri = sen1.replaceAll("cats","dogs");

console.log(pri);

pri2 = sen1.replaceAll(/Cats/g,"Dogs");
pri2 = sen1.replaceAll(/cats/g,"dogs");
console.log(pri2);

//  Converting a String to an Array
let words = "a,b,c,d,e,f";
const myArray = words.split(",");
console.log(myArray);
