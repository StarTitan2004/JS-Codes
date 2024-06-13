const promiseOne = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('Async task complete');
        resolve()
        reject()
    }, 1000);
})
promiseOne.then(function(){  //.then is connected to resolve
    console.log("Promise consumed");
})
.catch(function(){          //.catch is connected to reject
    console.log("Promise rejected");
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000);

}).then(function(){
    console.log("Async 2 resolved");
})



const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"aaa@gmail.com"}) //passing data in resolve

    },1000)
})

promiseThree.then(function(user){
    console.log(user);

})




const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error) {
            resolve({username: "Aadi",password: "123"})

        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username

}).then((username)=>{
    console.log(username);

}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolver of rejected"))


const promiseFive=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true
        if (!error) {
            resolve({username: "Java",password: "123"})

        }
        else{
            reject('Error: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response=await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


async function getAllUsers() {
    try {
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    } catch (error) {
        console.log("E:",error);
    }
}

getAllUsers()

