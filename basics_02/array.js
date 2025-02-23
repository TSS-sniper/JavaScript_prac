//ARRAY

const myarr = [0,1,2,3,4,5]
const hero=["h1","n2"]
//console.log(myarr[0]);
// array is shallow copied not deep copied meaning change in copy 
// will cause change in original array as well

const myarr2 = new Array(1,2,3,4)
//console.log(myarr2);
//console.log(myarr);

//Methods in Array

// myarr.push(6);
// console.log(myarr);
// myarr.pop();
// console.log(myarr);

//myarr.unshift(22) //add values at start and all element's index inc by 1
//console.log(myarr);
//myarr.shift(); //remove first element
//console.log(myarr);

//console.log(myarr.includes(2))
//console.log(myarr.includes(9)) // give false
//console.log(myarr.indexOf(9)) //give -1

const newArr = myarr.join()

//console.log(myarr)
//console.log(newArr)
//console.log(typeof newArr)


// slice and splice

//original array:
console.log("Original: ",myarr);
const m1 =myarr.slice(1,3)
console.log("m1:",m1);
console.log("After slice: ",myarr);
const m2= myarr.splice(1,3)
console.log("m2:",m2);
console.log("After splice: ",myarr);


//Difference:

//Slice: doesnt change the original array and doesnt include the end value
//splice: changes the original array and includes the end value

