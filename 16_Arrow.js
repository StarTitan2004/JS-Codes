const user={
    username: "Aaditya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) //"this" is used to specify current context
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()


// console.log(this);

// function one(){
//     console.log(this);
// }
// one()


// const arro=function(){
//     let username="aadi"
//     console.log(this.username);
// }
// arro()


// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(23,91));   //explicit arrow function me hume { } ke andar return function likhna padta hai


// const addTwo=(num1,num2)=> (num1+num2)
// console.log(addTwo(23,91));  //implicit arrow function me hum directly likh sakte h

