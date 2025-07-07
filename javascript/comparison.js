console.log(2>1)

console.log("2" > 1)

console.log(null>0)
console.log(null == 0)
console.log(null >= 0)

/* in the above three line
first line will print false
second line also will print false
third line will print true 
as an equalty check == and comparison > < >= <= work differently
comparisons convert null to a number, treating as 0
*/

console.log("2" === 2) // it will be false as === this one will also check that data type 
// is same or not