// Immmediately invoked function expression (IIFE)
// 1. Jo function immediately execute hojaye
// 2. Global scope ke pollution ko hatane ke liye iife use karte hai



// (function name(){
//    console.log(`Akshay`);
// })();

//  Note :- ()() -- like name() for call , here calling and definiton are together

(function (){
    console.log(`Akshay`);
 })();

 ((name)=>{
    console.log(`${name}`);
 })("happy")

