// ======================================================
// Truthy and Falsy Values in JavaScript
// ======================================================

// ------------------------------
// Example 1: Checking User Email
// ------------------------------

// const userEmail = [];              // Truthy
// const userEmail = "";              // Falsy
const userEmail = "Moin@gmail.com";   // Truthy

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have a user email");
}

/*
Hindi:
JavaScript me condition ke andar value automatically
true ya false me convert ho jati hai.

Agar value Truthy hai:
=> if block chalega

Agar value Falsy hai:
=> else block chalega
*/


// ======================================================
// FALSY VALUES
// ======================================================

/*

Ye values false treat hoti hain:

false
0
-0
0n (BigInt Zero)
null
undefined
NaN
""

*/


// ======================================================
// TRUTHY VALUES
// ======================================================

/*

Ye values true treat hoti hain:

"0"
"false"
" "
[]
{}
function(){}

Important:
Empty Array [] bhi truthy hota hai.
Empty Object {} bhi truthy hota hai.

*/


// ======================================================
// Check Empty Array
// ======================================================

const myArray = [];

if (myArray.length === 0) {
    console.log("Array is empty");
}

/*

length = 0
=> Array khali hai

length > 0
=> Array me elements hain

*/


// ======================================================
// Check Empty Object
// ======================================================

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

/*

Object.keys(obj)

Object ko array me convert kar deta hai.

Example:

{
   name: "Moin",
   age: 21
}

becomes

["name", "age"]

Agar keys ki length 0 hai,
to object empty hai.

*/


// ======================================================
// Nullish Coalescing Operator (??)
// ======================================================

/*

Syntax:

value1 ?? value2

Agar value1:

null OR undefined

ho to value2 return hogi.

Otherwise value1 return hogi.

*/

let val1;

val1 = 5 ?? 10;
console.log(val1);      // 5

val1 = null ?? 10;
console.log(val1);      // 10

val1 = undefined ?? 20;
console.log(val1);      // 20

val1 = null ?? 10 ?? 20;
console.log(val1);      // 10

/*
Hindi:

?? sirf null aur undefined ko check karta hai.

Agar left side valid value hai
to wahi return karega.

Nahi to right side return karega.
*/


// ======================================================
// Ternary Operator
// ======================================================

/*

Syntax:

condition ? truePart : falsePart

Short form of if-else

*/

const age = 18;

age >= 18
    ? console.log("Eligible to Vote")
    : console.log("Not Eligible");

/*

Equivalent if-else:

if(age >= 18){
    console.log("Eligible to Vote");
}
else{
    console.log("Not Eligible");
}

*/


// ======================================================
// Interview Notes
// ======================================================

/*

1. [] is Truthy
2. {} is Truthy
3. "" is Falsy
4. Object.keys(obj).length === 0
   => Empty Object Check

5. arr.length === 0
   => Empty Array Check

6. ?? checks only:
   null and undefined

7. Ternary Operator:
   condition ? true : false

*/