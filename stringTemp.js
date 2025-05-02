// Template Strings use back-ticks (``) rather than the quotes ("") to define a string:

let text = `Hello I am a googler`
console.log(text)

// Template Strings allow both single and double quotes inside a string:

let text1 = `Hello I am an "MP"`
console.log(text1)

// Template Strings allow multiline strings:
let text2 =
`The quick
brown fox
jumps over
the lazy dog`

console.log(text2)

// Template String provide an easy way to interpolate variables and expressions into strings.

let firstName = "John"
let lastName = "Wick"

let name = `Welcome!!! ${firstName} ${lastName} :)`
console.log(name)

// Template Strings allow expressions in strings:
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

