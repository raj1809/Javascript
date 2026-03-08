// syntax
// for (intialization; condition; inc/dec){
//     code 
//    }  --> it repeat some code A LIMITED number of times

// example 1
for (let i=2; i<=20; i+=2){
    console.log(i); 
}
console.log("------------------------");

// continue
for(let i = 1; i <= 10; i++){
    if (i == 3) {
        continue;  // use to skip an iteration
    }
     else {
        console.log(i);
     }
}
console.log("------------------------");

// break 
for(let i = 1; i <= 10; i++){
    if (i == 3) {
        break;  // use to breqak out of loop entirely
    }
     else {
        console.log(i);
     }
}
console.log("------------------------");

// / ------- INCREMENT -------
for(let i = 1; i <= 10; i++){
    console.log(i);
}
console.log("------------------------");

// ------- DECREMENT -------
for(let i = 10; i > 0; i--){
    console.log(i);
}