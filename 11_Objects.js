//https://www.youtube.com/watch?v=vVYOHmqQDCU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=16

//We can declare an object as an literal or as a constructor

//singelton
//Singletons are classes which can be instantiated once, and can be accessed globally

//when we declare from literals singelton is not created 
//when we declare frm constructor singelton is created


//Object.create // constructor method where singelton is created

//object literals

const mySym=Symbol("key1")

const JsUser = {
    name:"Aaditya",
    "Full Name":"Aaditya Saxena",
    [mySym]:"mykey1",//a symbol is always added in [ ] so that the datatype remains symbol, othervise it remains as a string
    age:"20",
    location:"Jaipur",
    email:"aadityasaxena@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

//Accessing Objects

//console.log(JsUser.name); //one way to access an objects
//console.log(JsUser["email"]); // we have put email in " " because in objects name, email, age, location etc are taken as strings
//console.log(JsUser["Full Name"]);
//console.log(JsUser[mySym]);//accessing a symbol also requires a [ ] so that the datatype remains symbol instead of string

//overide or edit values
JsUser.email="aadityasaxena@jklu.edu.in" // edit an entry in the object
//console.log(JsUser.email);


//Freeze: it freeze thevalues in an object and then we cannot edit them
//Object.freeze(JsUser)
//as we have freezed the object now it cannot be edited


JsUser.greeting= function(){
    //console.log("Namaste");
}
JsUser.greeting2= function(){
    //console.log(`Namaste ${this.name}`);
}
// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());
