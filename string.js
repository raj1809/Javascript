let name = "king"
let city = "new york"

console.log(`My name is ${name} and my city is ${city}`); // use  of template literals

const gameName = new String("dragon")
console.log(gameName[0]);
console.log(gameName.__proto__); // to determine the prootype

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('g'));

const url = "https://testauto.com/tenden%20test"

console.log(url.replace("%20", "-")) 

console.log(url.includes("test"));

let newName = "andrew-watson-check"
console.log(newName.split("-"));

