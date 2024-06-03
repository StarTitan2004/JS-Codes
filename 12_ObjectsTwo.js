//const UberUser=new Object() //Singelton Object

const UberUser={} //Non Singelton Object

UberUser.id="123456"
UberUser.name="Aaditya"
UberUser.isLoggedIn=false

//console.log(UberUser);

//nested objects
const regularUser={
    email: "aadityasaxena@gmail.com",
    fullname:{
        userfullname: {
            firstname:"Aaditya",
            lastname:"Saxena"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);




//++++++++++++++++++++++Merging two Objects++++++++++++++++++++

const obj1={
    1:"a",
    2:"b",
}

const obj2={
    3:"a",
    4:"b"
}

//const obj3={obj1,obj2} //an object inside an object is created just like an array
//console.log(obj3);

//const obj3=Object.assign(obj1,obj2) //combines 2 or more objects as we want, but the final object goes to obj1 which is the first object given, to avoid it wwe can use const: obj3=Object.assign({},obj1,obj2) here a new object is created where the final object is stored in an empty object {}
//console.log(obj3);



//Best Method to merge OBJECTS
//JUST LIKE IN ARRAYS HERE ALSO WE CAN USE "SPREAD"
const obj3={...obj1,...obj2}
//console.log(obj3);


//++++++++jab valuse database se aati h++++++++++++
const users=[   // array of users
                //multiple objects inside an array
    {
        id:1,
        email:"aadityasaxena@yahoo.com"
    },
    {
        id:2,
        email:"anuragsaxena@yahoo.com"
    },
    {
        id:1,
        email:"amittalmale@jklu.edu.in"
    },
]

users[1].email
//console.log(UberUser);

// console.log(Object.keys(UberUser));
// console.log(Object.values(UberUser));
// console.log(Object.entries(UberUser));


//console.log(UberUser.hasOwnProperty('isLogged')); //kya aapke pass "isLogged" name ki koi property hai?



//+++++++++++++++++Destructure+++++++++++++


const course={
    courrsename:"Maths",
    price: "999",
    courseInstructor:"Kapil Gupta"
}

//course.courseInstructor
const{courseInstructor: instructor}=course //const{courseInstructor}=course 
console.log(instructor);                   //console.log(courseInstructor);

