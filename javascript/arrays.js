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