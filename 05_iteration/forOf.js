// ======================================================
// FOR OF LOOP
// ======================================================

/*

Syntax:

for(const variable of iterable){
    // code
}

Used for:
1. Arrays
2. Strings
3. Maps
4. Sets

Not used directly with Objects

*/

// Array Example

const arr = [1, 2, 3, 4];

for (const num of arr) {
    console.log(num);
}

/*

Output:
1
2
3
4

*/


// String Example

const greetings = "hello world";

for (const greet of greetings) {
    console.log(`Each character is ${greet}`);
}

/*

Output:
h
e
l
l
o
...

*/


// ======================================================
// MAPS
// ======================================================

/*

Map:
- Stores key-value pairs
- Keys are unique
- Maintains insertion order

*/

const map = new Map();

map.set("IN", "India");
map.set("FR", "France");

console.log(map);


// Loop through Map

for (const key of map) {
    console.log(key);
}

/*

Output:

["IN","India"]
["FR","France"]

Each entry is returned as an array.

*/


// Destructuring

for (const [key, value] of map) {
    console.log(key, value);
}

/*

Output:

IN India
FR France

*/


// ======================================================
// FOR OF DOES NOT WORK ON OBJECTS
// ======================================================

const myObj = {
    game: "NFS",
    game2: "Spiderman"
};

// ❌ Error

/*
for(const [key,value] of myObj){
    console.log(key,value);
}
*/

/*

Reason:

Objects are NOT iterable.

Use for-in loop instead.

*/


// ======================================================
// FOR IN LOOP
// ======================================================

/*

Syntax:

for(const key in object){
    // code
}

Used for:
1. Objects
2. Arrays

Returns:
- Keys / Indexes

*/


const languages = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby"
};

for (const key in languages) {
    console.log(key);
    console.log(languages[key]);
}

/*

Output:

js
JavaScript

cpp
C++

rb
Ruby

*/


// ======================================================
// FOR IN WITH ARRAY
// ======================================================

const programming = ["C++", "JS", "Python"];

for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}

/*

Output:

0
C++

1
JS

2
Python

Note:
for-in gives INDEXES

*/


// ======================================================
// DIFFERENCE: FOR OF vs FOR IN
// ======================================================

const nums = [10, 20, 30];


// FOR OF

for (const value of nums) {
    console.log(value);
}

/*

Output:

10
20
30

Returns VALUES

*/


// FOR IN

for (const index in nums) {
    console.log(index);
}

/*

Output:

0
1
2

Returns INDEXES

*/


// ======================================================
// FOREACH LOOP
// ======================================================

/*

Used only with Arrays

Syntax:

array.forEach(function(item){
    // code
})

*/


const coding = ["JS", "C++", "Python"];

coding.forEach(function(item) {
    console.log(item);
});

/*

Output:

JS
C++
Python

*/


// ======================================================
// FOREACH USING ARROW FUNCTION
// ======================================================

coding.forEach((item) => {
    console.log(item);
});


// ======================================================
// PASSING FUNCTION REFERENCE
// ======================================================

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);

/*

Do NOT write:

coding.forEach(printMe())

Correct:

coding.forEach(printMe)

*/


// ======================================================
// FOREACH PARAMETERS
// ======================================================

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

/*

item  -> current value
index -> current index
arr   -> complete array

Example:

JS 0 [JS,C++,Python]
C++ 1 [JS,C++,Python]
Python 2 [JS,C++,Python]

*/


// ======================================================
// FOREACH WITH ARRAY OF OBJECTS
// ======================================================

const myCoding = [
    {
        lang: "JavaScript"
    },
    {
        lang: "C++"
    },
    {
        lang: "Python"
    }
];

myCoding.forEach((item) => {
    console.log(item.lang);
});

/*

Output:

JavaScript
C++
Python

*/


// ======================================================
// INTERVIEW QUICK REVISION
// ======================================================

/*

FOR OF
------
Arrays
Strings
Maps
Sets

Returns VALUES


FOR IN
------
Objects
Arrays

Returns KEYS / INDEXES


FOREACH
--------
Only Arrays

Returns:
item
index
array


Map
----
Stores key-value pairs
Unique keys
Insertion order maintained


Object
-------
Use for-in

Map
----
Use for-of

*/