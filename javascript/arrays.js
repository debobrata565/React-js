let myArr = [27, 23, 10, 45]

let arr = new Array(45, 69, 89) // this is another way to declare array
console.log(myArr[1])
console.log(arr[2])

// array methods
myArr.push(5)
console.log(myArr) // output [ 27, 23, 10, 45, 5 ]
myArr.pop()
console.log(myArr) // output [ 27, 23, 10, 45 ] as in pop method last value will delete

// myArr.unshift(20)
// console.log(myArr) // output [ 20, 27, 23, 10, 45 ]
// myArr.shift()
// console.log(myArr) // output [ 23, 10, 45 ]

console.log(myArr.includes(10)) // output true
console.log(myArr.indexOf(23)) // ouput 1

let newArr = myArr.join()
console.log(newArr) // join , convert the array into string
console.log(typeof myArr) // output object
console.log(typeof newArr) // output string

// slice and splice method

console.log("A ", myArr) // A  [ 27, 23, 10, 45 ]
const myn1 = myArr.slice(1,3)
console.log(myn1) // [ 23, 10 ]
console.log("B", myArr) // B [ 27, 23, 10, 45 ]

const myn2 = myArr.splice(1,3)
console.log(myn2) // [ 23, 10, 45 ]
console.log("C ", myArr) // C  [ 27 ]

// so in js array main difference between slice and splice is that
// slice() returns a shallow copy of a portion of an array without modifying
// the original array, while splice() changes the original array by adding or 
// removing elements.
