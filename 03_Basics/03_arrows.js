// this keyword   -> refers to the current object.

/*
const product = {
    productname : "Pencil",
    price : 4,
    message : function(){
    console.log(`${this.productname} is of Rs. ${this.price}`); 
    console.log(this);   // it refers to the class product
    }  
}

product.message();
product.productname = "Pen";
product.price = 10;
product.message();

console.log(this)        // it refers to the blank object, but in browser it refers to the blank object
*/


// const name = function(){
//    let  username = "Akshay";
//    console.log(this.username);    // undefined
// }

// name();



// Arrow function 

/*
const sumtwo =(num1,num2) =>{
    return num1 + num2;
}
console.log(sumtwo(23,24));
*/

// const addtwo = (num1,num2) => (num1+num2)
// console.log(sumtwo(23,24));



