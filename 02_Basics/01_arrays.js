// Declaration

const myArray = [0,1,2,3,4,5];
// const Heroes = ["Shaktiman", "Krrish", "JuniorG"];
// const array2 = new Array(0,1,2,3,4,5)

// console.log(myArray);
// console.log(Heroes);
// console.log(array2);
// console.log(myArray[2]);

// // Arrays Methods

// myArray.push(6)  // add element in last
// myArray.pop()   // remove last element

// myArray.unshift(9)  // add element in beginning
// myArray.shift()   // remove element from beginning

// console.log(myArray.includes(5))  //gives boolean value
// console.log(myArray.indexOf(3));

// const newArray = myArray.join(); // it joins all myArray elements into a string
// console.log(newArray);
// console.log(myArray);
// console.log(typeof newArray);

// Splice and slice

console.log("A",myArray);

const newarr1 = myArray.slice(0,3); // does not include 3 and does not affect on original array
console.log("B",myArray);
console.log(newarr1);

const newarr2 = myArray.splice(0,3);  // includes 3 and it affects on original array, the real portion from 0 to 3 index move to newarr2
console.log("C",myArray);
console.log(newarr2);



