const wpUser = new Object()
console.log(wpUser) // singleton object declaration 

const fUser = {}
console.log(fUser) // non sinleton object declaration

fUser.id = "4567v"
fUser.name = "Debankita"
fUser.age = 24
fUser.isLoggedIn = false

console.log(fUser)

const regularUser = {
    email  : "deb34@gmail.com",
    fullname : {
        username  :{
            firstname : "Debu",
            lastname : "Modak"

        }
    }
}
console.log(regularUser.fullname) // { username: { firstname: 'Debu', lastname: 'Modak' } }
console.log(regularUser.fullname.username) // { firstname: 'Debu', lastname: 'Modak' }
console.log(regularUser.fullname.username.lastname) // Modak

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}

// const obj3 = Object.assign(obj1,obj2) 
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// spraed method to add two objects
const obj3 = {...obj1, ...obj2}
console.log(obj3)

const users = [
    {
        Id : 10,
        email : "deb23@gamil.com"
    },
    {
        Id : 23,
        email : "debb@gmail.com"
    }
]
const access = users[1].email
console.log(access)

console.log(fUser)
console.log(Object.keys(fUser)) // [ 'id', 'name', 'age', 'isLoggedIn' ]
console.log(Object.values(fUser)) // [ '4567v', 'Debankita', 24, false ]
console.log(Object.entries(fUser)) // [
//   [ 'id', '4567v' ],
//   [ 'name', 'Debankita' ],
//   [ 'age', 24 ],
//   [ 'isLoggedIn', false ]
// ]

console.log(fUser.hasOwnProperty("isLoggedIn")) // true
console.log(fUser.hasOwnProperty("email")) // false


