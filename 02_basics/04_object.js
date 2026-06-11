//const tinderUser=new object() // singleton object
//const tinderUser1={} // object literal
//console.log(tinderUser); //output: {}
//console.log(tinderUser1); //same output: {}
const tinderUser={} // object literal
tinderUser.id="1234"
tinderUser.name="moin"
tinderUser.isLoggedIn=false
//console.log(tinderUser); //output: { id: '1234', name: 'moin', isLoggedIn: false }
const regularUser={ 
    email:"moin.com",
    fullname:{
        userfullname:{
            firstname:"moin",
            lastname:"khan"
        }
    }
 }
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);
// moin

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}
//const obj3={obj1,obj2} // spread operator se do objects ko merge kar sakte hai output dega: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//console.log(obj3); //output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//const obj3=Object.assign({},obj1,obj2,obj4) // Object.assign() se do objects ko merge kar sakte hai output dega: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
//console.log(obj3); //output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// ==================== ACCESS VALUES ====================

const obj3={...obj1,...obj2,...obj4} // Spread operator se do objects ko merge kar sakte hai output dega: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' 
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //keys ko array me dega: [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//values ko array me dega: [ '1234', 'moin', false ]
console.log(Object.entries(tinderUser));    //key-value pairs ko array of arrays me dega: [ [ 'id', '1234' ], [ 'name', 'moin' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // bta dega ki isLoggedIn key tinderUser object me hai ya nahi
// true
