// if statement
// <, >, >=, <=, ==, !=, ===, !==

const isUserloggedIn = true
const temperature = 51

// if (temperature < 50 ){
//     console.log("less than 50");
// }
// console.log("temperature is greater than 50");

// if (temperature < 50 ){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");  // Implicit scope

// if (balance < 500) {
//     console.log("less than 500");
    
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInfromGoggle = false
const loggedInfromEmail = true

// if (userLoggedIn && debitCard && 2==2) {
//     console.log("Allow to buy course");
// }
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInfromGoggle || loggedInfromEmail) {
    console.log("User logged in")
}