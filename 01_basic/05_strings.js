const name = "Nadim"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Nk-nadim-akram')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
//console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "  Nadim    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://nadim.com/nadim%20akram"

console.log(url.replace('%20', '-'));
console.log(url.includes("nadim"));


console.log(gameName.split('-'));
