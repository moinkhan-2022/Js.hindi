// 1 jan 1970 se time lenege pre defind by developers
 ////////// DATE /////


let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString);
// console.log(typeof myDate);

// let myCreateDate=new Date(2023,0,23)  // month 0 se start hota hai js mai
// console.log(myCreateDate.toDateString());

//time ke sath
// let myCreateDate=new Date(2023,0,23,5,3)  // month 0 se start hota hai js mai
// console.log(myCreateDate.toLocaleString());

 //let myCreateDate=new Date("01-14-2023")  // month 0 se start hota hai js mai indian style time 
// console.log(myCreateDate.toLocaleString());

let myTimeStamp=Date.now()
//console.log(myTimeStamp);
//console.log(myTimeStamp.myCreateDate.getTime());
//console.log(Date.now()/10000); //second mai krna ho to but give decimal so we use Math.flooor
//console.log(Math.floor(Date.now()/1000));


let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);  // +1 esiliye kyui 0 se start hota hai month
console.log(newDate.getDay());



//special method

newDate.toLocaleString('default',{
    weekday:"long"
})




