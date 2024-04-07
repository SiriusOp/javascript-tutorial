//  Singelton -  if we create an object with the helpof constructor, so it become a singelton object

//Object.create(); // constructor method of object declaration


// object literals

//symbol
const mySym = Symbol("Key1");

const Jsuser = {
    name : "Akshay",
    "Full Name" : "Akshay Kumar",
    age : 23,
    [mySym]  : "key1",     // this is how store symbol in object
    city : "Ghaziabad",
    email : "akshaykumar.abesec@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Saturday"]
};

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// //console.log(Jsuser.Full Name);  // not possible, gives error
// console.log(Jsuser["Full Name"]); // only single way of access
// console.log(Jsuser[mySym]);
// console.log(typeof mySym);

Jsuser.email = "hitesh@chatgpt.com"
// Object.freeze(Jsuser)      // after that, value not be change
Jsuser.email = "hitesh@microsoft.com"
// console.log(Jsuser);


Jsuser.greetings = function(){
       console.log(`Hello Js user, ${this.name}`);
}

Jsuser.greetings();