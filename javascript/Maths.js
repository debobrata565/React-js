console.log(Math) // out will be Object [Math] {}

console.log(Math.abs(-8)) // output is 8 as math.abs turned negative value into positive value
console.log(Math.round(23.7)) // output 24
console.log(Math.floor(23.7)) // output 23
console.log(Math.ceil(23.2)) // ouput 24

console.log(Math.min(9, 8, 17, 4)) // output 4
console.log(Math.max(23, 45, 78, 46)) // output 78

console.log(Math.random()) // math.random() value always be 0 to between 1
console.log((Math.random()*10) +1)

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max-min+1)) + min)