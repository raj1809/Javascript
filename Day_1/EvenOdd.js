// evenOddInput.js

// Import the readline module to take user input from the terminal
const readline = require('readline');

// Create an interface to read input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check if a number is even or odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is Even.");
  } else {
    console.log(number + " is Odd.");
  }
}

// Ask the user for input
rl.question('Please enter a number: ', function(input) {
  // Convert the input to a number (in case it's a string)
  const num = parseInt(input);
  
  // Check if the input is a valid number
  if (isNaN(num)) {
    console.log('Please enter a valid number!');
  } else {
    // Call the function to check even or odd
    checkEvenOdd(num);
  }
  
  // Close the readline interface after processing
  rl.close();
});
