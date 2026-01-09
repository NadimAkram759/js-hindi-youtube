//  Arrays

const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["sharuk", "salman", "aamir", "irfankhan"]

const myArray2 = new Array(1, 2, 3, 4)
// console.log(myArray[4]);


// Array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

const newArray = myArray.join()

// console.log(newArray);
// console.log(typeof newArray);

// console.log(myArray);


//         slice, splice

console.log("A ", myArray);

const newArr1 = myArray.slice(1, 3);

console.log(newArr1);
console.log("B ", myArray);

const newArr2 = myArray.splice(1, 3);
console.log(newArr2);
console.log("C ", myArray);