// The switch statement is used to perform different actions based on different conditions.
// Use the switch statement to select one of many code blocks to be executed.

// Syntax :
// switch(expression) {
//   case x:
    // code block
//     break;
//   case y:
     // code block
//     break;
//   default:
    // code block
// }

// The break Keyword
// When JavaScript reaches a break keyword, it breaks out of the switch block.
// This will stop the execution inside the switch block.
// It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

// The default Keyword
// The default keyword specifies the code to run if there is no case match:

// Common Code Blocks : sometimes you will want different switch cases to use the same code.

let text
switch (new Date().getDay()) {
    case 4:
    case 5:    
        text="Soon it will  be weekend ";
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default:
    text = "Looking forward to the Weekend";
}

function checkDay(dayNumber){
    let day
    switch (dayNumber) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
            
        default:
        console.log(" Enter valid day");
            break;
    }
    return day;
}
    console.log(checkDay(1))
    console.log(checkDay(4))
    console.log(checkDay(11))