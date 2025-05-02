// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index);

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

let index1 = text.lastIndexOf("locate")
console.log(index1);

// Both indexOf(), and lastIndexOf() return -1 if the text is not found:
let index2 =  text.lastIndexOf("John")
console.log(index2);

// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
let index3 = text.search("locate");
console.log(index3);

let index4 = text.search(/locate/)
console.log(index4);

//The match() method returns an array containing the results of matching a string against a string (or a regular expression).
let text1 = "The rain in SPAIN stays mainly in the plain";
let result = text1.match("ain")
console.log(result)

// The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
let textNew = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = textNew.matchAll("Cats");
console.log(iterator);

// The includes() method returns true if a string contains a specified value.

let text3 = "Hello world, welcome to the universe.";
let result1 = text3.includes("world");
console.log(result1);

// The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false

let text4 = "Hello world, welcome to the universe.";
let result3 = text4.startsWith("Hello");
console.log(result3);

// The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:

