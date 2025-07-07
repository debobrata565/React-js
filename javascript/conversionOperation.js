let score = 60

let result = "80cd"

console.log(typeof score)
console.log(typeof result)

let valueInNumber = Number(result)
console.log(typeof valueInNumber)
console.log(valueInNumber)// output will be NaN(Not a number)

/* if i  want to convert null 
in number output will be 0 in js
*/

/* conversion types
// "60" => 60
// "60abc" => NaN
// true => 1 ; false => 0
// undefined => NaN
// empty string will convert into false in bollean type
// string will convert into true in bollean type
*/

let isLoggedIn = 1

let bolleanIsLoggedIn = Boolean(isLoggedIn)
console.log(bolleanIsLoggedIn)

// 1 will contribute in true
// 0 will contribute in false

let someNumber = 67

let StringNumber = String(someNumber)
console.log(StringNumber)
console.log(typeof StringNumber)// ouput will be string here as number is converted in string
