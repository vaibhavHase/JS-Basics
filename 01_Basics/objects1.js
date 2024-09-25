//const tinderUser = new Object(); //singleton object
const instaUser = {
    
}
    instaUser.userId = "the_vaibhav_hase"
    instaUser.email = "vaibhav@gmail.com"
    instaUser.mob = 1234567890
    instaUser.isLoggedIn = true

//console.log(instaUser);

const regularUser ={
    email : "vaibhav@gmail.com",
    userName :{
        fullName : {
            firstName : "vaibhav",
            lastName : "Hase"

        }
    }
}

//console.log(regularUser.userName.fullName.firstName)

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

const targetObj = Object.assign({},obj1,obj2) //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
const targetObj1 = {...obj1,...obj2} //using spreading objects can also combine objects
console.log(targetObj1);

//Array of objects
const company = [
    dept={},
    {},
    {}
]

company[0].dept
console.log(instaUser)

console.log(Object.keys(instaUser))
console.log(Object.values(instaUser))
console.log(Object.entries(instaUser));
console.log(instaUser.hasOwnProperty('isloggedIn'));

//object destructuring  - 
const course = {
    courseName: "javascript",
    courseFees: 999,
    courseInstructor:"vaibhav"
}

const {courseInstructor : instructor} = course
console.log(instructor)

//json- javascript object notation
//when we fetch API data we get it in this format.

// {
//     "courseName" : "javascript",
//     "instructor" : "hitesh",
//     "fees" : "free"
// }

