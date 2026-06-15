// const user={
//     username:'john',
//     price:100,

//     welcomeMessage:funcion(){
//         console.log(`welcome ${this.username} to our website`);
//     }  
// }
// user.welcomeMessage(); // welcome john to our website       


// function chai(){
//     let user="john";
//     console.log(this);

// }
// chai(); // global object

   const chai=function(){
    let user="john";
    console.log(this.user);
   } 

   chai(); // undefined output: global object

   // arrow (=>) function
   const addTwo=(nums1,num2)=>{
    return nums1+num2;
   }
   console.log(addTwo(2,3)); // 5

   // or another way 
    const addTwo1=(nums1,num2)=> nums1+num2;
    console.log(addTwo1(2,3)); // 5   
