// 1
let smokeTests = 5
let regressionTests = 10

console.log(`Total Tests : ${smokeTests + regressionTests}`);

// 2
let testDuration = 125.789
console.log(testDuration.toFixed(2));

// 3
let timeout = 2000
console.log(`New Timeout: ${timeout + 1000}`);

// 4 
let executionTime = 180
console.log(`Execution Time: ${executionTime / 60} minutes`);

// 5 : Generate a random number between 1000 and 9999 to simulate a test user ID

// let max = 9999
// let min = 1000

// let GeneratedNum = (Math.floor(Math.random(max - min) * 9000) + min) 
// console.log(`Generated User ID: ${GeneratedNum} `);

// 6
let test1 = 120
let test2 = 140
let test3 = 160

console.log(`Average Execution Time: ${(test1 + test2 + test3) / 3}`)

// 7
let passedTests = 18
let totalTests = 20

console.log(`Pass Percentage: ${(passedTests/totalTests) * 100}`)

// 8
let responseTime = 350
if (responseTime > 300) {
    console.log("API Response Slow")
} else {
    console.log("API Response Fast");
}

console.log(responseTime > 300 ? "API Response Slow" : "API Response Fast")

// 9
let executionTimes = [120,150,180,200]
console.log(`Total Execution Time: ${120 + 150 + 180 + 200}`);

// 10
let max = 5
let min = 1

let retryTime = Math.floor(Math.random() * (max - min) * 1) + min
console.log(`Retry after ${retryTime} seconds`);

// 11
let resTime = 123.98765
console.log(resTime.toFixed(1))

console.log(Math.round(resTime))
