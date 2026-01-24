
function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("M");
}
// sayMyName ()

// function addTwoNumbers (number1, number2){  //  Parameters
//     console.log(number1 + number2);
// }
function addTwoNumbers (number1, number2){  //  Parameters
    // let result = number1 + number2
    // return result
    return number1 + number2
}
// addTwoNumbers(5, 2)
// addTwoNumbers(5, "2")     // Argument
// addTwoNumbers(5, null)  
const result = addTwoNumbers(5, 2)
// console.log("Result : ", result);


function loginUserMessage (username){
    return `${username} just logged in`
}
// const result1 = loginUserMessage("Nadim")
// console.log(result1);
// console.log(loginUserMessage("Nadim"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())

// function loginUserMessage (username){
//     // if (username === undefined) {
//     //     console.log("Please enter a Username");
//     //     return
//     // }
//     if (!username) {
//         console.log("Please enter a Username");
//         return
//     }
//     return `${username} just logged in`
// }
function loginUserMessage (username = "Sam"){
    // if (username === undefined) {
    //     console.log("Please enter a Username");
    //     return
    // }
    if (!username) {
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Nadim"))


// function calculateCartPrice (num1){
//     return num1;
// }
function calculateCartPrice (...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 300, 400, 500))


const user = {
    username: "nadim",
    price: 199
}

function hendleObject (anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// hendleObject(user)

hendleObject({
    username: "Sam",
    price: 199
})


const myNewArray = [100, 200, 300, 400, 500]

function returnSecondValue (getArray){
    return getArray[4]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400, 500]));