// 1 
let totalTests = 5
for (let test = 1; test <= 5; test++){
    console.log(`Running Test ${test}`);
}

// 2
let results = ["pass","fail","pass","pass","fail"]

for (let i; i <= results.length; i++){
        if(i == "pass"){
            console.log(`Total passed tests: ${i}`);     
        }    
}