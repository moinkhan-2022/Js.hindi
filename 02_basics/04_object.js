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



const course={
    courseName:"js in hindi",
    price:999,
    courseInstructor:"moin"
}
console.log(course.courseInstructor); // dot notation se value access kar sakte hai: moin
console.log(course["courseInstructor"]); // bracket notation se value access kar sakte hai: moin

const{courseInstructor:instructor}=course // object destructuring se value access kar sakte hai: moin
console.log(instructor); // moin

//API
// {
//    "name":"moin",
//     "coursename":"js in hindi",
//     "price":"free"
// }
[
    {},
    {},
]
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}