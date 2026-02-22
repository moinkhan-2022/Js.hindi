// Primitive types (7)
// string, number, boolean, null, undefined, symbol, bigint

const score = 100.3
let user = undefined
let user1

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // false

const bigNumber = 239580103893090138n


// Reference type (non-primitive)
// array, object, function

const heros = ["ironman", "spiderman"]

let myObj = {
    name: "moin",
    age: 22,
}

const myfunction = function () {
    console.log("hello")
}

console.log(typeof myfunction)