// 1
let testStatus = "pass"
if (testStatus === "pass"){
    console.log("Test Passed");
}

// 2
// let loginSuccess = true
// if (loginSuccess === true) {
//     console.log("Login Successful");  
// }

// 3
// let statusCode = 200
// if (statusCode === 200) {
//     console.log("API Request Successful");
// }

// 4
// let elementVisible = true
// if (elementVisible) {
//     console.log("Element Found");
// }

// 5
let retryCount = 3
if (retryCount > 2) {
    console.log("Retry limit reached");    
}

// 6
// let loginSuccess = true
// let dashboardLoaded = true

// if (loginSuccess === true) {
//     if ( dashboardLoaded === true) {
//         console.log("User successfully logged in and dashboard loaded")       
//     }   
// }

// 7
let tokenValid = true
let statusCode = 200

if(tokenValid === true){
    if(statusCode === 2000){
        console.log("API authenticated successfully");        
    }
}

// 8
let environment = "staging"
let browser = "chromium"

if(environment === "staging"){
    if(browser === "chromium"){
        console.log("Running staging tests on chromium");        
    }
}

// 9
let elementVisible = true
let elementEnabled = true

if(elementVisible){
    if(elementEnabled){
        console.log("Element ready for interaction");  
    }
}

// 10
let attempts = 3
let loginSuccess = false

if(attempts === 3){
    if(loginSuccess === false){
        console.log("Login failed after maximum attempts");
        
    }
}