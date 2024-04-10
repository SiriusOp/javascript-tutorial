// const useremail = "akshaykumar.abesec@gmail.com";

// if(useremail){
//     console.log("Got an email");
// }else{
//     console.log("Email not found");
// }



// falsy values
// 0, false, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}




// const arr = [];
// if(arr.length === 0){
//     console.log("Array is Empty");
// }


// const emptyobj = {};
// if(Object.keys(emptyobj).length===0){
//     console.log("Object is empty");
// }



// Nullish Coalescing Operator (??) : null undefined  - this is used for prevention if value come from  database is null or undefined

// let val1 = 5??10;
// let val2 = null ?? 10;
// let val3 = undefined ?? 15;
// let val4 = null??10??20;

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);



// Terniary Operator - Condition ? True : False

var age = 18;

age>=18?console.log("You can Vote"):console.log("You can't Vote")