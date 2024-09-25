//object literal

const user = {
    name : "vaibhav",
    id : "vai123",
    email : "vaibhav@gmail.com",
    isloggedin : true
}

console.log(user["name"]);
console.log(user.isloggedin);

//declare symbol and use it in object
 const mySym = Symbol("key1")

 const user2 = {
    name : "jon",
    id : "j212",
    email : "jon@gmail.com",
    [mySym]: "key2"
 }

 console.log(user2[mySym])

 user.greetings = function()
 {
    console.log("hello user")
 }

 user.greetings2 = function()
 {
    console.log(`hello user ${this.name}`)
 }
 
 console.log(user.greetings());
 console.log(user.greetings2());
 
