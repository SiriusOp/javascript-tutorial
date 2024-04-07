// function addTwoNumber(number1,number2){   // parameters
//     console.log(number1+number2);
// }

// addTwoNumber(14,54);



// ****** return ******

// function addTwoNumber(number1,number2){   // parameters
//         return number1+number2;
//     }
    
//     console.log(addTwoNumber(14,54));




// function loginuser(name){
//     return `${name} is logged in.`;
// }

// console.log(loginuser("Akshay"));
// console.log(loginuser());  // o/p - undefined is logged in.




// so, we edit the function to handle this situation.

// function loginuser(name){
//     if(!name){
//         console.log("Please enter your name in arguments while calling the function");
//         return;
//     }
//     return `${name} is logged in.`;
// }
// console.log(loginuser());



// we can also add default parameter if any arguments is not passed.

// function loginuser(name = "Happy"){
//         return `${name} is logged in.`;
//     }

//     console.log(loginuser());



//  when pass many numbers in argumnets

// function checkPrice(...num){   //rest operator - it stores all arguments in the form of elements of array(num)
//     return num;  // return an array
// }

// console.log(checkPrice(15,65,36,75,95,3,5,4,545));  




// Functions with object

/*
const product = {
    name : "Pencil",
    price : 4
}

function checklist(getProduct){
    return `${getProduct.name} if of Rs ${getProduct.price}.`
}

console.log(checklist(product));
console.log(checklist({
    name : "Pen",
    price : 10
}));
*/


// Functions with Array

const Array = [200,300,400]

function FirstIndexValue(newArray){
    return newArray[1];
}

console.log(FirstIndexValue(Array));
console.log(FirstIndexValue([500,600,700]));
