// shortcut to if & else if statements. helps to assign a variable based on a condition
// syntax: condition ? codeIfTrue : codeIfFalse
// condition ? expression1 : expression2

let age = 20
let text = (age < 18) ? "Minor" : "Adult"
console.log(text);

// 1
let testStatus = "pass"

let status = (testStatus === "pass") ? "Test Passed" : "Test Failed"
console.log(status);
 // or 
 console.log(testStatus === "pass" ? "Test Passed" : "Test Failed")

 // 2 
//  let loginSuccess = true
//  console.log(loginSuccess === true ? "Login Successful" : "Login Failed");
 
 // 3
 let elementVisible = false
 console.log(elementVisible === true ? "Element Found" : "Element Not Found");
 
 // 4
//  let retryCount = 2
// const maxRetries = 4
// console.log(retryCount < maxRetries ? "Retry Test" : "Stop Retrying");

// 5
let passedTests = 8
let totalTests = 10

let passPercent = (passedTests/totalTests) * 100
console.log(passPercent >= 80 ? "Test Suite Passed" : "Test Suite Failed");
// or
console.log((passedTests / totalTests) * 100 >= 80 ? "Test Suite Passed" : "Test Suite Failed");

// 6 
let retryCount = 2
const maxRetries = 3

let retryDecision = retryCount < maxRetries ? "Retry Test" : "Stop Retrying"
console.log(retryDecision);

// 7
// let statusCode = 404
// let apiResult = statusCode === 200 ? "Success" : "API Failed"
// console.log(apiResult)

// 8
// let browser = "firefox"
// let supportedBrowsers = (browser === "chromium" || browser === "firefox") ? "Supported Browser" : "Unsupported Browser"
// console.log(supportedBrowsers);

// 9
let attempts = 3
let loginSuccess = false

let accountState = (attempts >= 3 && loginSuccess === false) ?  "Account Locked" : "Login Successful"
console.log(accountState);

// 10
let statusCode = 500
let apiStatus = statusCode === 200 ? "Success"
                : statusCode === 404 ? "Not Found"
                : statusCode === 500 ? "Server Error"
                : "unknown Error"
            
    console.log(apiStatus);

// 11
let environment = "staging"
let baseURL = environment === "dev" ? "dev.app.com"
                : environment === "staging" ? "staging.app.com"
                :  environment === "prod" ? "app.com" 
                : "unknown"
                console.log(baseURL)
            
// 12
let headless = true
let browser = "chromium"

let state = (headless === true && browser === "chromium") 
            ? "Running headless chromium tests" 
            : "Running browser UI tests"

console.log(state);

// 13
let passed = 12
let failed = 3

let testResult = (failed === 0) ? "All tests passed" : "Some tests failed"
console.log(testResult);

// 14

let logSuccess = true
let dashboardLoaded = false

let result = logSuccess === true && dashboardLoaded === true ? "Login and Dashboard Loaded"
            : logSuccess === true && dashboardLoaded === false ? "Login Successful but Dashboard Failed"
            : "Login Failed"
        console.log(result);
        
            