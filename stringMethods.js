// 1. String Length
let text = "yuwfiwfw"
console.log(text.length)

//2. String charAt()
let test = "mango"
console.log(test.charAt(0))

// 3. charCodeAt()
let test1 = "banana"
console.log(test1.charCodeAt(1))

//4. codePointAt()
let text1 = "HELLO WORLD"
console.log(text1.codePointAt(1))

// 5. String at()
const name = "W3Schools"
console.log(name.at(2))

// 6. property access 
let text3 = "HELLO WORLD"
 console.log(text3[0])

// 7. String concat()
let node1 = "hello"
let node2 = "world"

console.log(node1.concat(" " , node2))

// All string methods return a new string. They don't modify the original string.
// Formally said:
// Strings are immutable: Strings cannot be changed, only replaced.

// Extracting String Parts

// 1. JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).

let newText = "Apple, Banana, Kiwi"
console.log(newText.slice(7, 14))

// If you omit the second parameter, the method will slice out the rest of the string:
console.log(newText.slice(7))

// If a parameter is negative, the position is counted from the end of the string:
console.log(newText.slice(-11))

// JavaScript String substring()
// substring() is similar to slice().
// The difference is that str and end values less than 0 are treated as 0 in substring().

let str = "Apple, Banana, Kiwi"
let part = str.substring(7, 13)
console.log(part)

// Converting to Upper and Lower Case
console.log(str.toLowerCase())
console.log(str.toUpperCase())

// String trim()
// The trim() method removes whitespace from both sides of a string:

let str2 = "   Hello     World      "
console.log(str2.trim())
console.log(str2.trimStart())
console.log(str2.trimEnd())

// String padStart()
// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length

let wae = "5"
console.log(wae.padStart(4, 0));
console.log(wae.padEnd(4, 0));

// String repeat()
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.

let wave = "Hello Test"
console.log(wave.repeat( 4));

//  String Content
// The replace() method replaces a specified value with another value in a string

let text4 = "Please visit Microsoft!"
console.log( text4.replace("Microsoft", "W3Schools"))

let text5 = "I love cats. Cats are very easy to love. Cats are very popular."
console.log(text5.replaceAll("Cats","Dogs"))
console.log(text5.replaceAll("cats","dogs"))