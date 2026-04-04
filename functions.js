
// function greet(){
//     return "Hello"
// }
// console.log(greet());

// function fullName(firstname, lastname) {
//     return firstname + " " + lastname
// }

// let name = fullName("John", "Star")
// console.log("My name is :" + name)

// // arrow function:
// const add = (a, b) =>  a + b;
// let x = add(5, 4)
// console.log(x);

// const hello = () => "Hello World!";
// console.log(hello())

// function declration
function add(a, b){ //here a, b are parameters
    return a + b
}
  const sum = add(5, 6) // here 5,6  are arguments
  console.log(sum)

// function without parametrs & arguments
function print() {
    console.log('hiiiiiii');    
}
    print()
    
// function expression :  anonymous function
const multiply = function(x, y) {
    return x*y;
}
const mul = multiply(5, 6)
console.log(mul)

// arrow function
const divide = (t1, t2) => t1/t2
const result = divide(100, 2)
console.log(result)

// function constructor
const substract = new Function('a', 'b', 'return a - b;');
const subs = substract(100, 20);
console.log(subs)

//IIFE (Immediately invoked function expression)
;(function(){
    console.log("Hiiiiiii, print anything!!!");
})();

// generator function
// function* and yield keyword

// anonymous function
const numbers = [1, 2, 3, 4, 5]
const numberSquaes =  numbers.map(function(e) {
    return e*e
})
console.log(numberSquaes);

// recursive function : function which calls itself
    function factorial(n) {
        if(n === 0 || n === 1){
            return ;
        }
        else {
            return n * factorial(n-1)
        }
    }
       console.log(factorial(4))

//  higher order function

function addition(a, b) {
    return a + b
}

function multiplicaiton(a, b) {
    return a * b
}

function operate(funcName, a, b) {
    return funcName(a, b)
}

const s = operate(multiplicaiton, 4, 5)
console.log(s)

const t = operate(addition, 4, 5)
console.log(t)