const user = {
    username: "Nadim",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
//   this ka value broser ke andar windows aate hai or visual studio me empty object aata hai.
// console.log(this);

// function chai (){
//     console.log(this);
// }
// chai()

// function chai (){
//     let username = "Nadim"
//     console.log(this.username);
// }
// chai()

// const chai = function (){
//     let username = "Nadim"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "Nadim"
    console.log(this.username);
}
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2       // explicitly return
// }
// console.log(addTwo(5, 4));

// const addTwo = (num1 , num2) => num1 + num2
// const addTwo = (num1 , num2) => (num1 + num2)   // Implicitly returns
// const addTwo = (num1 , num2) => {username: "nadim"}
const addTwo = (num1 , num2) => ({username: "nadim"})

console.log(addTwo(6, 4));

// const myArray = [2, 5, 4, 3, 6, 8, 9]

// myArray.forEach(() => {})