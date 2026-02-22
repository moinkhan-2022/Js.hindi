const name="moin"
const repocnt=50
console.log(name+repocnt+"khan");
console.log(`hello my name is ${name} and my repocnt is ${repocnt} `);
// string declare
const gameName=new String("moin")
console.log(gameName[0]);
console.log(gameName.__proto__);   //object 
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // kis position pr konsa char hai 
console.log(gameName.indexOf('k'));
console.log(gameName.indexOf('m'));

const newString=gameName.substring(0,2)
//console.log(newString);

const anotherString=gameName.slice(-2,2)
console.log(anotherString);

const String1="    moinkhan    "  //we dont want space
console.log(String1);
console.log(String1.trim());

const url="https://moin.com"
console.log(url.replace('moin', 'khan')); //change string by another one 

console.log(url.includes('moin'))
console.log(url.includes('khan'))
console.log(url.includes('.'))
console.log(url.includes('don'))
console.log(gameName.split('-'))



