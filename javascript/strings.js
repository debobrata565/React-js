const name = "Debobrata"
const age = "24"

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String("Cricket")
console.log(gameName)

console.log(gameName[0])
console.log(gameName.__proto__) // output will be {}
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('k'))

const newString = gameName.substring(0,5)
console.log(newString)

const anotherString = gameName.slice(-6, 4)
console.log(anotherString)

const newStringOne = "  Debu "
console.log(newStringOne)
console.log(newStringOne.trim())

const myName = "Debobrata Modak"
console.log(myName.replace("Modak", "Sharma"))

console.log(myName.includes("bobr"))

const sports = ("Cricket-Football-Hockey")
console.log(sports.split("-"))