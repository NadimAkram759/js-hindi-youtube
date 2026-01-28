//  Immediately Invoked Function Expressions IIFE

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

// global scope ke poliuction ko htane ke liye use kiya hmne.

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);    // IIFE function
})();

//  IIFE function ko terminate krne ke liye semicolon ka jarurat hota hai.

( () => {
    console.log(`DB CONNECTED TWO`);
})();

( (name) => {
    // Simple IIFE
    console.log(`DB CONNECTED ${name}`);
})('Nadim')