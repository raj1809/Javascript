let score = 20

console.log(typeof score);
console.log(typeof(score));

let score1 = "30"
console.log(typeof score1);

let valueInNumber = Number(score1)
console.log(typeof valueInNumber);

// "33" --> converts to 33
// "33abc" ---> converts to 33 but value is NaN
// true -->  1; false -->  0

let isLoggedIn = 1

let booleanIsLoggeIn = Boolean(isLoggedIn)
console.log(booleanIsLoggeIn);

// 1 --> true; 0 --> false
// "hitesh" --> true; "" (empty) --> false

let someNumber = 34

let stringNum = String(someNumber)
console.log(stringNum);
console.log(typeof stringNum);

console.log("**************************************************");

let str1 = "one"
let str2 = " tiger"
console.log(str1 + str2);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log("5" - 3);
console.log(10 + true);
console.log(10 + false);
console.log("10" * "2");
console.log(Number("abc"));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(null + 1);
console.log(undefined + 1);
console.log("5" == 5);
console.log("5" === 5);
console.log(null == undefined);
console.log(null === undefined);
console.log(Boolean([]));
