// there are two types of memories 
// Stack Memory(Primitive), Heap(Non-Primitive)

let myName = "DEBOBRATA"
let anotherName = myName
anotherName = "Tirtha"

console.log(myName)
console.log(anotherName)

let userOne = {
    email : "debu@gmail.com",
    id : 489,
}

let userTwo = userOne
userTwo.id = 576

console.log(userOne.id)
console.log(userTwo.id)
