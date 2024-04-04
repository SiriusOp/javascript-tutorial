const accountId = 11453
let accountemail = "akshaykumar.abesec@gmail.com"
var accountpassword = "12345"
accountcity = "Noida"  // it is also possible
let accountstatus;

// accountId = 2   // not allowed

/*
Prefer to not use var, because its give an issue on functional and block scope.
*/

console.log(accountId);
console.table([accountId,accountemail,accountpassword,accountcity,accountstatus]);