//  Singleton
// object.create


//  objects literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Nadim",
    "full name": "Nadim Akram",
    // mySym: "mykey1",
    [mySym]: "mykey1",
    age: 21,
    location: "Delhi",
    email: "nadimakram759@gmail.com",
    isLoggIn: false,
    lastLoginDays: ["monday", "thusday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]);

jsUser.email = "gotam602@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "nknoora@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());