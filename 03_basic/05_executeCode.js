//  javaScript execution contex
// [{}] -> global execution contex  <- this

//  Type of execution contex

// 1. Global execution contex
// 2. Function execution contex
// 3. Eval execution contex

//  javascript execution code run 

//  there are two type code execution and run

//  1. Memory creation phase. ya fir (Memory phase , creation phase)
//  Memory creation phase me sirf or sirf memory creat hota hai.

//  2. Execution phase
//  Execution phase me arithmetic operations kiya jata hai

//  koi bhi code ho ya kitna bhi badha code ho sabse phle global execution krta hai.

//  (Phase one)  Global execution (se run hota hai is ko allocate this se kiya jata hai.)

let val1 = 10
let val2 = 20
function addnum (num1 , num2){
    const total = num1 + num2
    return total
}
let result1 = addnum(val1, val2)
let result2 = addnum(5, 6)

//  (Phase two) Memory phase (is me sare variables ko ekktha kiya jata hai or ek jgh rakha jata hai pass me)

// val1 => undefined
// val2 => undefined
// addnum => defination
// result1 => undefined
// result2 => undefined

//  (Phase three)  Execution phase

// val1 <= 10
// val2 <= 20
// addnum => [Creat a new variable enviroment + execution thread] -> new execution contex ( new execution contex ek bar run hone ke bad return global execution ko krta hai or khud by khud delet ho jata hai)

// repet hota hai memory phase or execution phase tb tk jb tk output na mil jaye.