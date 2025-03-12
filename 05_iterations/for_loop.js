//For loop:

//Syntax:

// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; 
// }

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==7){
        //console.log("THALA FOR A REASON"); 
    }
    //console.log(element);
}

// for (let i = 1; i <=10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 1; j <=10; j++) {
//         //console.log(`Inner loop value ${j} and outer loop: ${i}`);
//         console.log(i+ 'X' + j + '=' + i*j);   
//     }
// }

let arr = ['flash', 'batman','superman']

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    //console.log(element);
}

//break and continue

//break
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        break //5 comes, gets out of loop   
    }
    console.log(`value of i is ${index}`);
}

//continue
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        continue //5 comes, then 5 skips and continues in the loop   
    }
    console.log(`value of i is ${index}`);
}
