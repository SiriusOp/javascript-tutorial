// const tinderUser = new Object()     //singelton

const tinderUser = {}     // non singelton

tinderUser.id = "siriusOP";
tinderUser.name = "akshay";
tinderUser.isLoggedIn  = true;
 
// console.log(tinderUser);


// nested object

const regularUser = {
    email : "akshaykumar.abesec@gmail.com",
    fullname : {
        username: {
            firstname : "Akshay",
            lastname : "Kumar"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);

// Join two objects in single object

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

// const obj3 = {obj1,obj2}     // this only makes a object of two objects(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2)   // this combines all the elements of obj1 and obj2 and makes a new object

// aside of using assign, we can also use the spread
const obj3 = {...obj1,...obj2}

// console.log(obj3);


// Now if getting data from database it comes in this form of arrays of object.

const data = [
    {
        id : 1,
        email : "akshaykumar.abesec@gmail.com"
    },
    {
        id : 2,
        email : "akshaykumar.abesec@google.com"
    },
    {
        id : 3,
        email : "akshaykumar.abesec@yahoo.com"
    }
]

// Now how to access,
// console.log(data[1].email)



// console.log(Object.keys(tinderUser))    // return the all keys in the form of array
// console.log(Object.values(tinderUser));  // similarly, return the all values in the form of array
// console.log(Object.entries(tinderUser)); // it makes an array of all key-value pairs, and store them into an array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))  // return boolean value



// ******************************* object Destructure *********************************

const course = {
    Coursename : "js in Hindi",
    Coursefees : "Free",
    CourseInstructor : "Akshay"
}

// console.log(course.Coursename)
// this is how we access, but if we want access again and again, so we have to write course.Coursename again and again, which becomes very lengthy. Now object distructure helps here.

const{CourseInstructor} = course;
console.log(CourseInstructor); 

const{CourseInstructor:Instructor} = course;   // here we give own name, that you can use named - Instructor in place of CourseInstructor
console.log(Instructor);


// ************** JSON (javaScript Object Notation) ***********************************

// Its an return format from API, which comes in the form of array or object

// Json format

     // it may be comes in the form of object

    // {
    //     "Instructor": "Akshay",
    //     "coursename": "js in hindi",
    //     "price": "free"
    // }


    //  It may be comes in the form of array, which comtains object
    
    // [
    //     {},
    //     {},
    //     {}
    // ]



