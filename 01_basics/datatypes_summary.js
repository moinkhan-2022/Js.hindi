// // Primitive types (7)
// // string, number, boolean, null, undefined, symbol, bigint

// const score = 100.3
// let user = undefined
// let user1

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId) // false

// const bigNumber = 239580103893090138n


// // Reference type (non-primitive)
// // array, object, function

// const heros = ["ironman", "spiderman"]

// let myObj = {
//     name: "moin",
//     age: 22,
// }

// const myfunction = function () {
//     console.log("hello")
// }

// console.log(typeof myfunction)







//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(in primitive use // variable copy milta hai) ,heap(int non primitive yha pr reference milta hai )
let myName="moin"
let anothername=myName
anothername="Boss"
console.log(anothername);
console.log(myName);
  

let user_1={
 email:"moin@.com",
 upi:"moin@ybl"
}
let user_2=user_1
user_2.email="moin123@.com"
console.log(user_1.email);
console.log(user_2.email);