// dates

let myDates = new Date()
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleString());
// console.log(typeof myDates);


// let myCreatedDate = new Date(2023, 0, 12)
// let myCreatedDate = new Date(2023, 0, 12, 5, 3)
// let myCreatedDate = new Date("2023-01-12")    YY MM DD
let myCreatedDate = new Date("01-14-2023")    // MM DD YY

// console.log(myCreatedDate.toLocaleString());



//   Time

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay() and the time}`

newDate.toLocaleString('default', {
    weekday: "long"
})

