
// glopbal scope
{
    // blocked scope
    let a = 30;
    const b = 40;
    var c = 50;
}

console.log(a);   // a is not defined
console.log(b);   // b is not defined
console.log(c);   // 50, this is a main problem of var, thats why we not learn more about var. it is not a blocked scope. which gives many problem


// Nested function

// function one(){
//     const username = "Akshay"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);  

//      two()
// }
// one()




// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         // console.log(username + website);
//     }
//     // console.log(website);
// }
// // console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))
function addone(num){
    return num + 1
}



addTwo(5)            // not defined
const addTwo = function(num){
    return num + 2
}