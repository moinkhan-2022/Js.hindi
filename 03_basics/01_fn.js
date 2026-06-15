function sayMyName(){
    console.log("My name is John");
    console.log("I am learning JavaScript");
}
sayMyName(); // function call karne se function ke andar ka code execute hoga
// My name is John
// I am learning JavaScript

//ese bhi kr skte hai yai best hai
function addTwoNumbers(num1,num2){ //num1 and num2 are parameters of the function
    return num1+num2; // function ke andar return statement se value return kar sakte hai
}
//addTwoNumbers(5,10); // (5,10) are arguments of the function
// // function call karne se function ke andar ka code execute hoga aur return value console me print ho jayegi: 15
const result=addTwoNumbers(5,10); // function call karne se function ke andar ka code execute hoga aur return value result variable me store ho jayegi
console.log(result); // 15

 // ese bhi kr skte hai
function addTwoNumbers(num1,num2){ //num1 and num2 are parameters of the function
    console.log(num1+num2); // function ke andar return statement se value return kar sakte hai
}
addTwoNumbers(5,10); // (5,10) are arguments of the function

function loginUserMessage(username="khan"){ //or loginUserMessage(username="khan") bhi use kar sakte hai default value ke liye mtlb kuch bhi na do to yai to print hoga hee
    // if(username===undefined || username==="") // or (!username) bhi use kar sakte hai){
    //     console.log("Please provide a valid username");
    //      return
    // }
    return `${username} just logged in`;
}
console.log(loginUserMessage("moin")); // function call karne se function ke andar ka code execute hoga aur return value console me print ho jayegi: moin just logged in 
console.log(loginUserMessage("")); // function call karne se function ke andar ka code execute hoga aur return value console me print ho jayegi: khan just logged in
console.log(loginUserMessage()); // function call karne se function ke andar ka code execute hoga aur return value console me print ho jayegi: undefined just logged in


function calculateCartPrice(val1,val2, ...num1){ // rest operator se multiple arguments ko array me store kar sakte hai
   // [ 200, 400, 500 ]
     return num1;
}
console.log(calculateCartPrice(200,400,500,600));

const user={ //using object 
    username: "moin",
    age: 23
}
function userInfo(){
    console.log(`My name is ${this.username} and I am ${this.age} years old`); // this keyword se object ke properties ko access kar sakte hai

}
userInfo.call(user); // call method se function ke andar this keyword ko user object se point kar sakte hai
// My name is moin and I am 23 years old

const mynewArray=[1,2,3,4,5]
function returnSecondElement(getArray){
    return getArray[1]; // function ke andar array ke second element ko return kar sakte hai
}
console.log(returnSecondElement(mynewArray)); // function call karne se function ke andar ka code execute hoga aur return value console me print ho jayegi: 2{  