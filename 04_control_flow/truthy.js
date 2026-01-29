// const userEmail = "nadimakram759@gmail.com"
const userEmail = ""

if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("Dont't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", "false", " ", [], {}, function()[], 
// false == 0
// false = ""
// 0 = ""

const myArray = []

if (myArray.length === 0) {
    console.log("Array is Empty");
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is Empty");
}

// Nullish coalescing opetator (??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20
// val1 = null ?? undefined

console.log(val1);

// terniary operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");


