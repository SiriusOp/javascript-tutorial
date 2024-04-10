// for in loop

//syntax 
//  for (const key in object) {
//  }

// const obj = {
//     game1 : "NFS",
//     game2 : "GTA5",
//     game3 : "BGMI",
//     game4 : "COD"
//  }

//  for(const key in obj){
//     console.log(key);
//  }

//  for(const key in obj){
//     console.log(obj[key]);
//  }

//  for(const key in obj){
//     console.log(key,obj[key]);
//  }




// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(key);   // print index as a key
// }
// for (const key in programming) {
//     console.log(programming[key]);   // print index as a key
// }




// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);   // doesnot print because map is not iteratable
// }