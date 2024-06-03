"use strict";//treat all Js code as newer version

// alert(3+3) //we are using nodejs not browser,on browser we will get a popup that will say 6


console.log(3+3)//output=6

let name="Aaditya" //String
let age=18 //number
let isLoggedIn=false //boolean


//PRIMITIVE
//7 types String, Number, NULL, undefined, Symbol, BigInt

//number=>2 to power 53
//bigint
//string => " "
//boolean=> true/false
//null => standalone value
//undefined =>
// symbol=> unique

console.log(typeof age);//Output => number
console.log(typeof null);//Output=>object

//Non Primitive (Reference)
//Arrays, Objects, Functions

const score=100
const scoreValue=100.3

const isLoggedin=false
const outsideTemp=null
let usedEmail= undefined //same as just:-> let userEmail

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);





