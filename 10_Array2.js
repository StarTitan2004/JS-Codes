//chai or code 
//https://www.youtube.com/watch?v=m6azhgyCi-k&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=15

const dinosaur=["trex","velociraptor","iguanadon","brachiosaur"]
const animals=["lion","tiger","deer","hare"]
dinosaur.push(animals)
//console.log(dinosaur); //instead of merging two arrays, an array inside an array is created

// console.log(dinosaur[4]); //accessing elements in the combined array usnig push operation
// console.log(dinosaur[4][2]);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//CONCATINATE combines two arrays and displays a new array
const Animal_Kingdom=dinosaur.concat(animals)
//console.log(Animal_Kingdom); //concat returns a merged array as a new array 


//SPREAD spreads all the values of an array 
//Spread divides an array into different individual parts and then combines all of them
const All_Animals=[...dinosaur,...animals]
console.log(All_Animals);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const another_array=[1,2,3,[4,5,6],7,[4,5]]//depth of this array is 3
const real_another_array=another_array.flat(Infinity) //FLAT it combines the array with the depth of 3 and makes it a 1-D array, we have given infinity so that we dont have to specify the depth of array
//console.log(real_another_array);


// console.log(Array.isArray("Aaditya"))
// console.log(Array.from("Aaditya"));
// console.log(Array.from({name:"Aaditya"})); //an empty array is created of name






//+++++++++++++++++++++++++++++Convert given data into an array++++++++++++++++++++++++++++++++++++



score1=12
score2=23
score3=34
score4=45
score5=56
score6=67

// console.log(Array.of(score1,score2,score3,score4,score5,score6));
