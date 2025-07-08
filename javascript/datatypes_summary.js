// primitive data types

// 7 primivitive data types : String, number, Bollean, null, undefined, 
// symbol, bigint

let name = "Debu" // string
const value = 142 // number
let isLoggedIn = false // bollean
let temp = null // null
let userEmail; // undefined

let id = Symbol('123')
let anotherId = Symbol("123")
console.log( id === anotherId)


//non-primitive data types or reference data types

// reference data types : Array, functions, objects

const players = ["Rohit", "Virat", "Dhoni", "Bumrah"] // array
console.log(players)

/* let myObject = {
    name : "Debu",
    age : 24,
} */ // object

let myFunction = function(){
    console.log("Hello World")
}

/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

