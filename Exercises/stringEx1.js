// 1.
let testName = "login test"
console.log(testName.toUpperCase())

// 2. 
// let url = "https://staging.app.com"

// if (url.includes("app.com")) {
//     console.log("Valid Application URL");
// } else {
//         console.log("Invalid Application URL");
// }

// 3.
let username = "   qa_user   "  
console.log(username.trim());

//  4. 
let browser = "CHROMIUM"
console.log(browser.toLowerCase());

//5.
let password = "Test@1234"
console.log("*".repeat(password.length))

//6.
let apiURL = "https://api.app.com/v1/login"
let version = apiURL.match(/v\d+/)[0]
console.log("API Version:", version)

// 7.
let testCase = "checkout_flow_test"
console.log(testCase.replaceAll("_", " "));

// 8.
let email = "tester@automation.com"

console.log(email.split("@")[1]);
 
// 9.
let url = "https://staging.app.com"
if(url.includes("https")){
    console.log("Secure URL");    
} else {
    console.log("Not Secure");
    
}

// 10. 
let fileName = "test_report.pdf"
console.log("File Type:", fileName.split(".")[1])
console.log("File Type:", fileName.split(".").pop())

// 11.
let feature = "login"
let type = "smoke"

console.log(feature.concat("_", type, "_", "test"))
console.log(`${feature}_${type}_test`)

// 12.
let endpoint = "/api/v1/users"
if (endpoint.includes("api")) {
    console.log("Valid API Endpoint");
} else {
        console.log("Invalid API Endpoint");
}