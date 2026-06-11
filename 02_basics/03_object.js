// ==================== OBJECTS IN JAVASCRIPT ====================

// Singleton Object
// Constructor se object banao (new Object()) to singleton object banta hai

// Object Literal
// Sabse common aur easy way object banane ka

// Object.create() -> object banane ka ek aur method

const mySyn = Symbol("key1")

const jsUser = {
    name: "moin",
    "full name": "moin khan", // space hai to [] se access karna padega
    age: 18,
    [mySyn]: "mykey1", // Symbol key likhne ka correct syntax
    location: "greater noida",
    email: "moin.com"
}


// ==================== OBJECT ACCESS ====================

// Dot notation -> normal keys ke liye

console.log(jsUser.email)
// moin.com


// Square bracket notation -> special cases ke liye

console.log(jsUser["email"])
// moin.com

console.log(jsUser["full name"])
// moin khan

// NOTE:
// jsUser.full name ❌
// jsUser."full name" ❌
// Space wali key ko hamesha [] se access karo


// ==================== SYMBOL ====================

// Direct access karoge to Symbol key nahi milegi

console.log(jsUser.mySyn)
// undefined

// Symbol access karne ka correct way

console.log(jsUser[mySyn])
// mykey1

console.log(typeof jsUser[mySyn])
// string (kyunki value "mykey1" string hai)

console.log(typeof mySyn)
// symbol


// ==================== UPDATE VALUES ====================

// Object ki value change kar sakte hain

jsUser.name = "oiii"

console.log(jsUser.name)
// oiii


// ==================== FREEZE OBJECT ====================

// Freeze ke baad object me koi change nahi hoga

Object.freeze(jsUser)

jsUser.name = "khaaan"

console.log(jsUser.name)
// oiii (change nahi hua)


// ==================== ADD FUNCTIONS ====================

// Object ke andar function bhi store kar sakte hain

jsUser.greeting = function () {
    console.log("Hello JS User")
}

jsUser.greetingTwo = function () {
    // this current object ko refer karta hai
    console.log(`Hello JS User, ${this.name}`)
}


// ==================== FUNCTION CALL ====================

jsUser.greeting()
// Hello JS User

jsUser.greetingTwo()
// Hello JS User, oiii


// Agar function ko call nahi karoge to sirf reference milega

console.log(jsUser.greeting)
// [Function (anonymous)]


// ==================== QUICK REVISION ====================

// . -> normal key access karne ke liye
// [] -> special key ya space wali key ke liye
// Symbol key -> hamesha [] se access karo
// Object.freeze() -> object lock kar deta hai
// this -> current object ko refer karta hai
// Object ke andar function bhi add kar sakte hain

// Interview Point:
// [mySyn] -> Symbol key
// mySyn -> normal string key