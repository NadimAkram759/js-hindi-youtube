// let a = 10
// const b = 20
// var c = 30

let a = 300  //   Global Scope

if (true) {
    let a = 10      //  Block Scope
    const b = 20
    // var c = 30
    // console.log("Inner: ", a);  // Inner Scope
    
}

// console.log("Outer: ", a);  // Outer Scope
// console.log(b);
// console.log(c);


//  Nested Scope

function one (){
    const username = "Nadim"

    function two (){
        const website = "Youtube"
        console.log(username);
        console.log(website);
    }
    // console.log(website);
    
    two()
}
// one()

if (true){
    const username = "Nadim"

    if(username === "Nadim"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++

// console.log(addOne(5))
// function addOne (num){
//     return num +1
// }

function addOne (num){
    return num +1
}
console.log(addOne(5))

// console.log(addTwo(5));
// const addTwo = function(num){
//     return num +2
// }

const addTwo = function(num){
    return num +2
}
console.log(addTwo(5))