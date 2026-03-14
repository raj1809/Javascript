const score = 100
console.log(score)

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNum = 23.8900
console.log(otherNum.toPrecision(2))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

let x = 23
console.log(x.toString())
console.log(x.toString(2))

let y = 9.10456
console.log(y.toExponential())
console.log(y.toExponential(2))

let z = 57.656
console.log(z.toFixed(1))
console.log(z.toFixed(2))


// Converting Variables to Numbers
// Number()	Returns a number converted from its argument
// parseFloat()	Parses its argument and returns a floating point number
// parseInt()	Parses its argument and returns a whole number
// The methods above are not number methods. They are global JavaScript methods

console.log(Number(true))
console.log(Number(false))
console.log(Number("10"))
console.log(Number("  10"))
console.log(Number("10  "))
console.log(Number(" 10  "))
console.log(Number("10.33"))
console.log(Number("10,33"))
console.log(Number("10 33"))
console.log(Number("John"))


console.log(Number(new Date("1970-01-01")))
 
console.log(Number(new Date("1970-01-02")))

// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
console.log(parseInt("-10"))
console.log(parseInt("-10.33"))
console.log(parseInt("10"))
console.log(parseInt("10.33"))
console.log(parseInt("10 20 30"))
console.log(parseInt("10 years"))
console.log(parseInt("years 10"))

// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
console.log(parseFloat("-10"))
console.log(parseFloat("-10.33"))
console.log(parseFloat("10 20 30"))
console.log(parseFloat("10 years"))
console.log(parseFloat("years 10"))





