const actors = ["SRK", "RK", "SK", "AK"]
const actress = ["DP", "MD", "AR"]

// actors.push(actress)
// console.log(actors) // [ 'SRK', 'RK', 'SK', 'AK', [ 'DP', 'MD', 'AR' ] ]
// console.log(actors[4][2]) // AR

const celebraties = actors.concat(actress)
console.log(celebraties) //['SRK', 'RK', 'SK',  'AK', 'DP',  'MD', 'AR' ]

// spraed method 
const new_celeb = [...actors, ...actress]
console.log(new_celeb) //['SRK', 'RK', 'SK',  'AK', 'DP',  'MD', 'AR' ]

const new_arr = [2, 5, 8, [4, 8, 7], [5, 1, [3, 7, 9]]]
const real_array = new_arr.flat(Infinity)
console.log(real_array) // [2, 5, 8, 4, 8, 7, 5, 1, 3, 7, 9]

console.log(Array.isArray("Debu")) // false
console.log(Array.from("Debu")) // [ 'D', 'e', 'b', 'u' ]

console.log(Array.from({name: "Debu"})) // [] as it is not understanding the value of key 
// value and variable value

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]