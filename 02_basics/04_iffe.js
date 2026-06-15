//iffe full form is immediately invoked function expression
// it is a function that is executed immediately after it is defined
// it is also known as self-invoking function
//gobal scope se pollution ko avoid karne ke liye iffe ka use kiya jata hai
(function chai(){
  conole.log("hello world");
})();  //semicolon help to stop the code from running into the next line of code    

(()
=> {
    console.log("hello world");
})();