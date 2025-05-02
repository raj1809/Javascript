const readline = require('readline');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to add two numbers
function addNumbers() {
  // Ask the user for the first number
  rl.question('Please enter the first number: ', function(input1) {
    // Convert the input to a number
    const num1 = parseFloat(input1);
    // If the input is not a valid number, show an error message
    if (isNaN(num1)) {
      console.log('Please enter a valid number for the first input.');
      rl.close();
      return; // Exit the function early
    }

    // Ask the user for the second number
    rl.question('Please enter the second number: ', function(input2) {
      // Convert the second input to a number
      const num2 = parseFloat(input2);

      // If the input is not a valid number, show an error message
      if (isNaN(num2)) {
        console.log('Please enter a valid number for the second input.');
        rl.close();
        return; // Exit the function early
      }

      // Calculate the sum
      const sum = num1 + num2;

      // Display the result
      console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

      // Close the readline interface
      rl.close();
    });
  });
}

// Call the function to execute
addNumbers();
