// Write a program where you: Declare a const variable baseURL = "https://example.com"
// Declare a let variable currentUser
// Assign "Raj" to currentUser
// Print both values.
const baseURL = "https://example.com"
let currentUser = "Raj"

console.log("Base URL : " +baseURL)
console.log("Current User : " +currentUser)
console.log("**************************************");

//Create a script where:
// let retryCount = 0
// Increase retryCount 3 times.
// Expected output:
// Retry count: 3

let retryCount = 0
for(let i=1; i<=3; i++){
   retryCount++
}
console.log(retryCount);
console.log("**************************************");

// Create variables for:
// const BASE_URL = "https://testapp.com"
// const TIMEOUT = 5000
// let testUser = "qa_user"

// Print:

// Running tests on: https://testapp.com
// Timeout: 5000
// User: qa_user

const BASE_URL = "https://testapp.com"
const TIMEOUT = 5000
let testUser = "qa_user"

console.log("Running tests on : " + BASE_URL)
console.log("Timeout : " + TIMEOUT) 
console.log("User : " + testUser);
console.log("**************************************");

// let user = "guest"
// If login succeeds → change it to "logged_in_user"
// Expected Output:
// User before login: guest
// User after login: logged_in_user

let user = "guest"
console.log("User before login: " + user);
user = "logged_in_user"
console.log("User after login: " + user);

console.log("**************************************");
// const config = {
//   browser: "chromium",
//   headless: true
// }
// Change headless to false.

const config = {
    browser: "chromium",
    headless: false
}
config.headless = false

console.log(config);
console.log("**************************************");

// Simulate test execution.
// let passedTests = 0
// let failedTests = 0
// Update values:
// passedTests += 3
// failedTests += 1
// Print:
// Passed: 3
// Failed: 1

let passedTests = 0
let failedTests = 0
 passedTests += 3
 failedTests += 1
 console.log(`Passed: ${passedTests}`)
 console.log(`Failed: ${failedTests}`);
 console.log("**************************************");

// const BASE_URL1 = "https://automationtest.com"
// let currentPage = "login"
// Update page after login:
// currentPage = "dashboard"
// Print:
// Navigating to https://automationtest.com
// Current Page: dashboard
 
const BASE_URL1 = "https://automationtest.com"
let currentPage = "login"

currentPage = "dashboard"

console.log(`Navigating to ${BASE_URL1}`)
console.log(`Current Page: ${currentPage}`);
 console.log("**************************************");

// Fix the following code.

// const maxRetries = 3
// maxRetries = 5
// let status
// status = "Running"
// status = "Completed"
// console.log(maxRetries)
// console.log(status)
// Questions:
// What is wrong?
// Fix the code

let maxRetries = 3
maxRetries = 5
 let status

 status = "Running"
 status = "Completed"

 console.log(maxRetries);
 console.log(status);
  console.log("**************************************");

// Write a config script:
// const config2 = {
//   baseURL2: "https://app.com",
//   browser2: "chromium",
//   timeout2: 30000
// }

// let environment2 = "staging"
// Print:
// Running tests on staging
// Browser: chromium
// Timeout: 30000

const config2 = {
  baseURL2: "https://app.com",
  browser2: "chromium",
  timeout2: 30000
 }

let environment2 = "staging"

console.log(`Running tests on ${environment2}`);
console.log(`Browser: ${config2.browser2}`);
console.log(`Timeout: ${config2.timeout2}`);


