// ==================== ARRAY METHODS ====================

const marvel_heros = ["thor","ironman","captain","hulk"]
const dc_heros = ["superman","batman","flash"]


// push() -> adds whole array as ONE element

marvel_heros.push(dc_heros)

console.log(marvel_heros)
// [
//   'thor',
//   'ironman',
//   'captain',
//   'hulk',
//   ['superman','batman','flash']
// ]

console.log(marvel_heros[4][1])
// batman


// concat() -> merges arrays and returns new array

const allHeros = marvel_heros.concat(dc_heros)

console.log(allHeros)
// [
//   'thor','ironman','captain','hulk',
//   'superman','batman','flash'
// ]


// Spread Operator (...) -> modern way to merge arrays

const allHero = [...marvel_heros, ...dc_heros]

console.log(allHero)
// [
//   'thor','ironman','captain','hulk',
//   'superman','batman','flash'
// ]


// flat() -> removes nested arrays

const arr = [1,2,3,4,[4,5,6],[7,8,[4,5]]]

const real_arr = arr.flat(Infinity)

console.log(real_arr)
// [1,2,3,4,4,5,6,7,8,4,5]


// Array.isArray() -> checks if value is an array

console.log(Array.isArray("Moin"))
// false

console.log(Array.isArray([1,2,3]))
// true


// Array.from() -> converts iterable to array

console.log(Array.from("MOIN"))
// ['M','O','I','N']

console.log(Array.from({name:"moin"}))
// []


// Array.of() -> creates array from given values

let score1 = 100
let score2 = 103
let score3 = 102

console.log(Array.of(score1, score2, score3))
// [100,103,102]


// ==================== QUICK REVISION ====================

// push()      -> add element at end (array becomes one element)
// concat()    -> merge arrays
// spread(...) -> modern merge
// flat()      -> remove nesting
// isArray()   -> check array
// from()      -> convert to array
// of()        -> create array from values