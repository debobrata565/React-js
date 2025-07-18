// singleton method 
// object.create() // constructor method

const mySym = Symbol("key1")
// object literals method
const jsUser = {
    "name" : "Debobrata",
    "full name" : "Debobrata Modak",
    [mySym] : "mykey1",
    age : 24,
    email : "debobrata23@gmail.com",
    isLoggedIn : false,
    numberOfdaysLogin : ["Monday", "Sunday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser.name)
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

// jsUser.email = "modakdb@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "modak@gmail.com"
// console.log(jsUser) // output {
// //   name: 'Debobrata',
// //   'full name': 'Debobrata Modak',
// //   age: 24,
// //   email: 'modakdb@gmail.com',
// //   isLoggedIn: false,
// //   numberOfdaysLogin: [ 'Monday', 'Sunday' ],
// //   [Symbol(key1)]: 'mykey1'
// // }

jsUser.greetings = function(){
    console.log("Hello js user")
}
console.log(jsUser.greetings) // [Function (anonymous)]
console.log(jsUser.greetings())

jsUser.greetingsTwo = function(){
    console.log(`Hello js user, ${this.age}`)
}
console.log(jsUser.greetingsTwo()) // Hello js user, 24