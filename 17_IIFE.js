
//Normal Function
// function dinosaur(){
//     console.log(`DB CONNECTED`);
// }

// dinosaur()



//IIFE Immediately  Invoked Function Expressions(IIFE)
(function dinosaur(){
    console.log(`DB CONNECTED`);
})();

//here our function is inside two () () 
//the first one in which the function resides is where we write the definition of the function 
//the second one is where we execute the function(or execution call)
// The pollution from global scope creates problems sometimes to avoid that we use IIFE
