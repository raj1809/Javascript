//  String indexOf() : The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found
let text = "Please locate where locate occurs!"
console.log(text.indexOf('occurs'))

// String lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string
let text1 = "Please locate where locate occurs!"
console.log(text.lastIndexOf('locate'))

// String search() : The search() method searches a string for a string (or a regular expression) and returns the position of the match
let text2 = "Please locate where 'locate' occurs!"
console.log(text2.search("locate"))
console.log(text2.search(/locate/))

// String match(): The match() method returns an array containing the results of matching a string against a string (or a regular expression)
let text3 = "The rain in SPAIN stays mainly in the plain";
console.log(text3.match("ain"))
console.log(text3.match(/ain/))
console.log(text3.match(/ain/g))
console.log(text3.match(/ain/gi))

//  matchAll() : The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression)
let test = "I love cats. Cats are very easy to love. Cats are very popular."
console.log(test.matchAll("Cats"))

// String includes()
// The includes() method returns true if a string contains a specified value.
// Otherwise it returns false.

let sen = "Hello world, welcome to the universe."
 console.log(sen.includes("world"))

 //  String startsWith()
// The startsWith() method returns true if a string begins with a specified value.
// Otherwise it returns false

let sen1 = "Hello world, welcome to the universe"
console.log(sen1.startsWith("Hello"))
 
 //  String endsWith()
// The startsWith() method returns true if a string begins with a specified value.
// Otherwise it returns false

console.log(sen1.endsWith("universe"))

