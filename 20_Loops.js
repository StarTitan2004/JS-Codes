// for

for (let i = 0; i <=10; i++) {
    // const element = i;
    if (i==5) {
        //console.log("5 is here");
    }
    //console.log(i);
    
}

for (let i = 0; i <=10; i++) {
    //console.log(`outer loop value: ${i}`);
    for (let j = 0; j <=10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);  //visualize outer and inner lops
        //console.log(i + ' * ' + j + ' = ' + i*j); //print tables from 1 to 10
    }
    
}



let myArray=["IronMan","HUlk","Spooder Maan",]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}


//BREAK and CONTINUE

// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log(`detected 5`);
//         break
//     }
//     const element = (`Value of i is ${index}`);
//     console.log(index);
// }

// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log(`detected 5`);
//         console.log(`but program will now continue`);
//         continue
//     }
//     if (index==10) {
//         console.log(`detected 10`);
//         console.log(`program will now break`);
//         break        
//     }
//     console.log(`Value of i is ${index}`);
// }