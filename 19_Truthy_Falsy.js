//+++++++++++++++++++++TRUTHY FALSY VALUES+++++++++++++++

//Truthy Value Example
// const userEmail="aadityasaxena@yahoo.com"
// if(userEmail){ //here we have not compared nay value but just assumed that userEmail is a true value this is called Truthy value
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }


//Falsy Value Example
// const userEmail2=""
// if(userEmail2){ //here we have not compared nay value but just assumed that userEmail is a true value this is called Truthy value
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }



// const userEmail3=[] //empty array hone ke bad bhee output me Got user emaillikha aa raha h
// if(userEmail3){ //here we have not compared nay value but just assumed that userEmail is a true value this is called Truthy value
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }



//Which are truthy and Falsy Values
//Falsy Values
// false,0,-0,Bigint 0n, "",null,undefined,NaN


// Truthy Values
//true, etc etc
//"0",'false'," ",[],{},function(){}


// Nullish Coalescing Operator(??):null undefined

let val1;
//val1=5 ?? 10
//val1=null ?? 10
//val1=undefined ?? 15
//val1=null ?? 10 ?? 20

//console.log(val1);


//Terniary Operator


const iceTeaPrice=100
iceTeaPrice>=80 ? console.log("less than 80") : console.log("more than 80");
