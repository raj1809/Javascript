// 1
// function checkAge(age) {
//     if (age > 18) {
//         console.log("Eligible to vote");
//     } else {
//         console.log("Not eligible to vote");
        
//     }
// }
// checkAge(19)
// checkAge(10)

// 2
let testStatus = "pass"
if (testStatus === "pass"){
    console.log("Test Passed");
} else {
    console.log("Test Failed");   
}

// 3
let loginSuccess = false
if (loginSuccess === false) {
    console.log("Login Successful");    
} else {
    console.log("Login Failed");
}

//4
let statusCode = 200
if (statusCode === 200) {
    console.log("API Request Successful");
} else {
    console.log("API Request Failed");  
}

// 5
let elementVisible = false
if (elementVisible) {
    console.log("Element Found");
} else {
    console.log("Element Not Found");
}

// 6
let retryCount = 2
const maxRetries = 3

if (retryCount < maxRetries) {
    console.log("Retrying test");
} else {
    console.log("Max retries reached");
}