//arrays


//initilize arrays
const myArr=[0,1,2,3,4,5] //way1 to initilize arrays
const myArr2=new Array(1,2,3,4) //way2 to initilize arrays

//console.log(myArr[0]);


//++++++++++++++++METHODS in Arrays+++++++++++++++++++++++++++
//Push & Pop 
myArr.push(6) //add new element in array
//console.log(myArr);
myArr.pop(1) //delete elements in array
//console.log(myArr);

//unshift Method
//adds given element in starting of array but is very bad method because ot has to shift the whole array just to add one element
myArr.unshift(1)
//console.log(myArr);

//shift method
//removes the first element in the array
myArr.shift()
//console.log(myArr);


//Join
//converts an array into a string
const newArr=myArr.join()
// console.log(myArr);
// console.log(typeof myArr);

// console.log(newArr);
// console.log(typeof newArr);


//+++++++++++Slice, Splice++++++++++++++

//console.log("A",myArr);
const myn1=myArr.slice(1,3)//creates a new array and does not affect the existing array
//slice only takes forst range in output and does not take 2nd range as output

// console.log(myn1);
// console.log("B",myArr);

const myn2=myArr.splice(1,3) // cuts the array based on range and creates a new array, and those elements are cut from the original array
// console.group(myn2);//takes first and second range both in output 

// console.log(myArr);//new original array after splice

//An array [[1,2,3,4],['a','b','c']] is given in javascript, print it in my html file as an unordred list give me an code for this task