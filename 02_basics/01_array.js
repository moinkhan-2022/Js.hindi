// java script array is resizable 
const arr=[0,1,2,3,4,5]
const arr2=["moin","khan","Ashutosh"]
console.log(arr2);

const arr3=new Array(1,2,3,4,5,6)
console.log(arr3[1]);

// ARRAY methods

arr3.push(6)   //add kr skte hai element ko
arr3.pop();
console.log(arr3);

arr3.unshift(9)  // start mai add 
arr3.shift() // starting me se hat jaega element
console.log(arr3);

console.log(arr3.includes(9));
console.log(arr3.indexOf(3));
console.log(arr3);

// imp operation
const arr4=arr3.join()
console.log(arr3);  //array me elelemnt
console.log(arr4);  // string me elelemnt

// slice and splice
console.log("A",arr3);
const my=arr3.slice(1,3)

console.log(my); 
console.log("B",my);

