// console.log('standard_user')
// console.log("locked_out_user")
// console.log("problem_user")

// for of loop
const users = ['standard_user', 'locked_out_user', 'problem_user', 'best_user']
for (const user of users){
     console.log(user);
 }
console.log("---------------------------------------");

// for loop
for (let i=0; i<users.length; i++){
    console.log(i, users[i]);
}
console.log("---------------------------------------");

// forEach 
users.forEach(function(user) {
  console.log("Testing with user:", user)
})
console.log("---------------------------------------");

// forEach with arrow function
users.forEach(user => {
    console.log(user);
    
})

