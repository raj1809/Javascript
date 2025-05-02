let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());


let myTimestamp  = Date.now()
console.log(myTimestamp);


let myCreatedDate = new Date("04-30-2025")
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()  + 1);
console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`)

newDate.toLocaleString('default',  {
    calendar: "long"
})