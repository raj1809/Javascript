// if (condition) {
//     //  block of code to be executed if the condition is true
// }

let age = 177
if(age >= 18){
    console.log("can vote");
}

// The else Statement
// Use the else statement to specify a block of code to be executed if the condition is false.

let ageNew = 5
if(ageNew >= 18){
    console.log("can vote");
} else {
    console.log("can't vote");
 }

//  The else if Statement
// Use the else if statement to specify a new condition if the first condition is false.

const time = new Date().getHours()
if (time < 10) {
    console.log("Good morning") 
  } else if (time < 20) {
    console.log("Good Day") 
} else {
    console.log("Good Evening") 
}

function checkNum(number){
    if (number > 0){
        console.log("Number is +ve")
    } else if(number < 0) {
        console.log("Number is -ve")      
    } else {
        console.log("Number not found")
    }
}
 checkNum(25)
 checkNum(-33)
 checkNum()