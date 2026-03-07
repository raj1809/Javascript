// Create a variable:
// let testStatus = "passed"
// Write code that prints:
// Test Passed
// If status = "failed" → print "Test Failed"

let testStatus = "passed"
if(testStatus === "passed"){
    console.log("Test Passed")
} else{
    console.log("Test Failed")
}

// Q. 2.
let totalTests = 10
let passedTests = 7
console.log(`Failed Tests: ${totalTests - passedTests}`)

// Q.3:
let retryCount = 0
console.log(`Retry Count: ${retryCount += 1}`)

// Q.4:
const test1Time = 120
const test2Time = 150
console.log(`Total Execution Time: ${test1Time + test2Time}`)

// Q.5:
const maxRequests = 100
let usedRequests = 45
console.log(`Remaining Requests: ${maxRequests - usedRequests}`)

// Q. 6:
let timeout = 2000
console.log(`New Timeout: ${2 * timeout}`)

// Q.7:
const totalTime = 300
const numberOfTests = 3
console.log(`Average Test Time: ${totalTime/numberOfTests}`)

// Q.7:
let attempts = 3
const maxAttempts = 3
if (attempts === maxAttempts) {
    console.log("Max login attempts reached")
}

// Q.8:
let isVisible = true
if (isVisible){
    console.log("Element is visible")
}

//Q. 9: 
let passed = 8
let total = 10
console.log(`Pass Percentage: ${(passed / total) * 100}`)

// spread operator
let text = "12345"
let max = Math.max(...text)
let min = Math.min(...text)
console.log(max)
console.log(min)

console.log("****************************************")

let arr = [1, 2, 99, 109, -1, 7798]
console.log("Min: " + Math.min(...arr))
console.log("Max: " + Math.max(...arr))

