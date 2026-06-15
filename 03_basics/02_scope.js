// {} if it is come with fcuntion called scope and if it is come with block called block scope
if(true){
let a=10
const b=20
var c=30
}
// console.log(a);
// console.log(b); a and b are block scope and c is function scope so we can access c outside the block but not a and b
// a and b not print because they are block scope and c is function scope so we can access c outside the block but not a and b
//console.log(c);


 let a=10
const b=20 // bahar global scope me declare kiya hai to ye dono variable global scope ke under aate hai aur hum inhe kahi bhi access kar sakte hai
var c=30
function myFunction(){
    let a=100
    const b=200
    var c=300
    console.log(a); // 100
    console.log(b); // 200 //block scope ke andar hi print hoga ye dono variable block scope ke under aate hai aur hum inhe block ke bahar access nahi kar sakte hai
    console.log(c); // 300
}
myFunction();
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


function one(){
    const username="John"
    function two(){
        const password="1234"
        console.log(username); // John
    }
        //console.log(password); // 1234 // password is not defined because it is block scope and we are trying to access it outside the block
        two();  //esko agar call nhi kiya to one() bhi nhi hoga call
    }
    one();
    if(true){
        const username="John"
        if(username==="John"){
            const website="www.example.com"
            console.log(username+website); // Johnwww.example.com
    }
   // console.log(website); // website is not defined because it is block scope and we are trying to access it outside the block
    }
  //  console.log(username); // username is not defined because it is block scope and we are trying to access it outside the block 
  
  //+++++++++++++++++interesting++++++++++++++++++


function addone(num){
    return num+1
}

addone(5) 


const addTwo=function(num){
    return num+2
}
addTwo(5)