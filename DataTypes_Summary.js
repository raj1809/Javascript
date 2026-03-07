// Primitive --> 7 types : String,  Number,  Boolean, null, undefined, Symbol, BigInt



// Non-Primitive (Reference type) --> 3 types : Arrays,  Objects, Functions

// const cars = ["BMW", "LAND ROVER"] // array

// let myDetails = {                 // object
//         firstName : "John",
//         age : 22,
// }
 
// const myFunction = function() {            //  function
//         console.log("Hello JS!!!");
// }

// console.table([cars])

// stack and heap memory

// stack is used in primitive data types  ==> copy milti hain  (original value is not changed)
// heap is used in non-primitive data types ==> reference milta hai (original values is changed)

let myYtName = "tesla models"

let anotherName = myYtName
anotherName = "robo corp"

console.log(myYtName)
console.log(anotherName)

console.log("**************************************")

let userOne ={
        email: "userone@email.com",
        upi: "userone@ybl"
}

let userTwo = userOne

userTwo.email = "usertwo@email.com"

console.log(userOne.email)
console.log(userTwo.email)


