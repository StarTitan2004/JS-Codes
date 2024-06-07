//for of

// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
// }



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const greetings='Hello World'

for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
    
}




//MAPS

const map=new Map() //new is used to create an instance of an object that has a constructor function
map.set('IN',"India")
map.set('US',"United States of America")
map.set('Fr',"France")

//console.log(map);

for (const key of map) {
    //console.log(key);

}

for (const [key,value] of map) { //destructuring 
    //console.log(key," : ",value);
    
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//Objects

const myObject={    //object ki keys COD, CSGO, KSP ect hai, jese array ki keys 0,1,2,3.... hoti hai vese hi object ki keys custom hoti h
    COD:'Cal of Duty',
    CSGO:'Counter Strike Global Offence',
    KSP:'Kerbal Space Program',
    GTA5:'Grand Thief Auto 5'

}

for (const key in myObject) {
    //console.log(key); //this will just print keys

    //console.log(myObject[key]); 
    
    //console.log(`${key} full form is ${myObject[key]}`);
}

//if we use for in loop in for arrays then the keys of array will be printed 
//in for of loop the values of an array were printed
// arrays ki keys 0 se start hoti hai but object ki keys custom given hoti hai as given in above game example

const games=["CSGO","COD","KSP","GTA5"]
for (const key in games) {
    //console.log(key);
    //keys of array are printed
}




//++++++++++++for each++++++++++++++

// let numbs=[0,1,2,3,4];

// numbs.forEach(b => {
    
//     console.log(b*2);
// });

// let numbers=[1,2,3,4,5,6,7,8,9,10]
// numbers.forEach((a,i,numbers)=>{
//     console.log(a,i,numbers);
// });
