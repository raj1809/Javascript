
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())

console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())
console.log(myDate.toUTCString())
console.log(typeof Date)
console.log(typeof myDate)


let myCreatedDate = new Date(2026, 0, 18)
console.log(myCreatedDate.toDateString())

let myNewDate = new Date(2026, 0, 18, 5, 45)
console.log(myNewDate.toLocaleString())

let myDates = new Date("01/01/2027")
console.log(myDates.toLocaleString())
console.log(myDates.getTime())

let timestamp = Date.now()
console.log(timestamp)

