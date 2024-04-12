// const coding = ["js","ruby","java","python", "cpp"]

// coding.forEach(function (val){
//     console.log(val);
// })



// coding.forEach((item) => {
//     console.log(item);
// })



// function printMe(item){
//         console.log(item);
//     }
// coding.forEach(printMe)   // Here print me is a callback function and foreach is a high order function.


// coding.forEach( (item, i, a)=> {
//         console.log(item, i, a);
//     } )



//     const myCoding = [
//         {
//             languageName: "javascript",
//             languageFileName: "js"
//         },
//         {
//             languageName: "java",
//             languageFileName: "java"
//         },
//         {
//             languageName: "python",
//             languageFileName: "py"
//         },
//     ]

// myCoding.forEach((item)=>{
//     console.log(item.languageName);
// })



//  const coding = ["js", "ruby", "java", "python", "cpp"]

//  const values = coding.forEach((item) =>{
//     // console.log(item);
//     return item;
//  })
// console.log(values);   // undefined : it foreach doesnot return any value


// So filter() function is introduced (check value true and false)

// const nums = [1,2,3,4,5,6,7,8,9,10]

// const values = nums.filter((n)=>n>4)
// console.log(values)
   
  // Or 

// const values = nums.filter((n)=>{
//    return n>4
//    })
// console.log(values)

// Note :- While using scopes in arrow function, we have to use return keyword when we return some values.




// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   let userbooks = books.filter((bk)=> bk.genre === 'History')
//   console.log(userbooks)

// userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
//   console.log(userBooks);



// map() function   (operations on the values)

// const nums = [1,2,3,4,5,6,7,8,9,10];

// const value = nums.map((n)=>n+10);
// console.log(value);



// Chaining

// const nums = [1,2,3,4,5,6,7,8,9,10];

// const values = nums.map((n)=>n*10);
// const values1 = nums.map((n)=>n*10).map((n)=>n+1);
// const values2 = nums.map((n)=>n*10).map((n)=>n+1).filter((n)=>n>40);

// console.log(values);
// console.log(values1);
// console.log(values2);



// Reduce()  function

const nums = [1,2,3]

// const mytotal = nums.reduce((sum,n)=> sum + n,0) // where accumulator : sum and its start with 0, current value : n 
// console.log(mytotal);


// const mytotal = nums.reduce((sum,n)=> {
//   console.log(`Accumulator : ${sum}  and current Value : ${n}`);
//   return sum + n
// },0) // where accumulator : sum and its start with 0, current value : n 
// console.log(mytotal);


// const shoppingCart = [
//   {
//       itemName: "js course",
//       price: 2999
//   },
//   {
//       itemName: "py course",
//       price: 999
//   },
//   {
//       itemName: "mobile dev course",
//       price: 5999
//   },
//   {
//       itemName: "data science course",
//       price: 12999
//   },
// ]

// const Total = shoppingCart.reduce((totalprice,item)=> totalprice + item.price,0)
// console.log((Total));
