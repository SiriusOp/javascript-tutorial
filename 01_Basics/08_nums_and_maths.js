// const score = 400;
// console.log(score);


/*
 const balance = new Number(100);   
// console.log(balance);

balance.toString(); //convert number into string , now we use prototype methods of strings
console.log(balance.toString().length);
console.log(balance.toFixed(2));  // gives two decimal number.
*/
     
// const otherNumber = 124.855;
// console.log(otherNumber.toPrecision(3));  // try to precise 3 value

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-In'));





// ***************************** Maths ********************************


/*
console.log((Math));
console.log(Math.abs(-4));   // convert negative value to positive value
console.log(Math.round(465.54));
console.log(Math.ceil(464.54));
console.log(Math.floor(465.54));
console.log(Math.min(4,6,3,4,8,1,45));
console.log(Math.max(4,6,3,4,8,1,45));
*/

// random


// console.log(Math.random());  // gives random value between 0 to 1

// console.log(Math.floor(Math.random()*10) + 1 )   // gives random value 1 to 10, we add +1 because if the value is 0.12323 it becomes 0 due to floor.


// random numbers between two numbers

const max = 20;
const min = 10;

console.log(Math.floor(Math.random()*(max-min)) + 1 + min )


