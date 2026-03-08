// 1
// let statusCode = 5001
// let currentStatus;

// switch (statusCode) {
//     case 200:
//         currentStatus = "API Success"
//         break;

//     case 404:
//        currentStatus = "API Not Found"
//         break;

//     case 500:
//        currentStatus = "Server Error"
//         break;
//     default:
//         currentStatus = "Not defined"
// }

// console.log(currentStatus);

//2 
// let browser = "chromium"
// let currentBrowser

// switch (browser) {
//     case "chromium":
//     currentBrowser = "Running tests on Chromium"
//         break;
    
//     case "firefox":
//         currentBrowser = "Running tests on Firefox"
//         break;

//     case "webkit":
//         currentBrowser = "Running tests on Webkit"
//         break;

//     default:
//         currentBrowser = "Unidentified browser"
// }

// console.log(currentBrowser);

// 3
let environment = "staging"
let currentEnv

switch (environment) {
    case "dev":
        currentEnv = "Running tests on Dev server"
        break;

    case "staging":
        currentEnv = "Running tests on staging server"
        break;

    case "prod":
        currentEnv = "Running tests on prod server"
        break;

    default:
        currentEnv = "Running tests on unknown server"
}
    console.log(currentEnv);

// 4
let currentPage = "login"
let navDetail

switch (currentPage) {
    case "login":
        navDetail = "Entering login credentials"
        break;

    case "dashboard":
        navDetail = "Loading dashboard data"
        break;

    case "checkout":
        navDetail = "Processing checkout flow"
        break;

    default:
        navDetail = "error fetching data"
}

    console.log(navDetail);
    

    // test new

    let statusCode = 201
    let testPosition

    switch (statusCode) {
        case 200:
            testPosition = "Success response"
            break;
        case 201:
            testPosition = "Resource created"
            break;
        case 400:
            testPosition = "Client error"
            break;
        case 404:
            testPosition = "Resource not found"
            break;
        case 500:
            testPosition = "Server error"
            break;

        default:
            testPosition = "Unknown status";
    }
        console.log(testPosition);
        





