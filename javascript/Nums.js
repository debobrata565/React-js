const score = 400
console.log(score)

const value = new Number(45)
console.log(value)

console.log(value.toString().length) // output 2
console.log(value.toFixed(3)) // output 45.000

const otherNumber = 56.746
console.log(otherNumber.toPrecision(3)) // ouput 56.7
console.log(otherNumber.toPrecision(2)) //output 57

const bigNumber = 100000
console.log(bigNumber.toLocaleString("en-IN")) // output will be 1,00,000

