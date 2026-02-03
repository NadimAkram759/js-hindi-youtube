// for in

const myObject = {
    js: "JavaScript", 
    cpp: "C++",
    rb: "ruby", 
    swift: "swift by app"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "cpp", "py", "java"]

for (const key in programming) {
    // console.log(key);
}

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "United States America")
// map.set("FR", "France")
// map.set("UK", "United Kindom")   // map is  not itratebal in forin loop
// map.set("IN", "India")

// for (const key in map) {
//     console.log(key);
// }