// Write a program that checks whether a given number is even or odd.

function evenOdd(num) {
    if (num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(evenOdd(3))
console.log(evenOdd(30))

// Take a number input and determine if it is positive, negative, or zero.

function typeOfNum(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return "Invalid input: please enter a valid number."
    }

    if (number > 0) {
        return "+ve Number"
    } else if (number < 0) {
        return "-ve number"
    } else {
        return "Number is zero"
    }
}

console.log(typeOfNum(0));
console.log(typeOfNum(-10));
console.log(typeOfNum(10));

console.log(typeOfNum("test"));

function votingEligibility(age) {
    if (typeof age !== 'number' || isNaN(age)) {
        return "Invalid input: Please enter a number"
    }

    if (age >= 18) {
        return "Eligible to vote"
    } else {
        return "Not eligible to vote"
    }
}

console.log(votingEligibility(11));
console.log(votingEligibility(19));

// Grade Checker: Given a percentage, print the grade: A: 90-100, B: 80-89, C: 70-79, D: 60-69 E: below 60

function gradeCheck(grade) {
    if (typeof grade !== 'number' || grade < 0 || grade > 100) {
        return "Invalid input: please enter a percentage between 0 and 100"
    }
    if (grade >= 90) {
        return "Grade is A"
    } else if (grade >= 80) {
        return "Grade is B"
    } else if (grade >= 70) {
        return "Grade is C"
    } else if (grade >= 60) {
        return "Grade is D"
    } else {
        return "Grade is E"
    }
}
console.log(gradeCheck(90));
console.log(gradeCheck(20));

// Take two numbers and print the larger one
function largestNum(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        return "Invalid input: please enter valid numbers"
    }

    if(num1 > num2) {
        return ("num1 is greater than num2")
    } else if(num1 < num2) {
        return ("num2 is greater than num1" )
    } else{
        return  ("num2 is equal to num2")
    }
}
 console.log(largestNum(20, 23))
 console.log(largestNum(23, 20))
 console.log(largestNum(23, 23))


