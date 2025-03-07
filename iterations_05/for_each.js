// for each loop

//A function that accepts up to three arguments. forEach calls 
// the callbackfn function one time for each
// element in the array. Performs the specified action for each
// element in an array.

const coding = ["js","ruby","python","cpp","java"]

// coding.forEach(function (i) {
//     console.log(i+"wawa");
// })

// coding.forEach((i)=>{ //arrow function
//     console.log(i)
// })

function printMe(i){
    console.log(i);
}

//coding.forEach(printMe) //here just pass the reference of the function


coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})


const myCoding = [
    {
        langName:"JavaScript",
        langFileName: "js"
    },
    {
        langName:"Python",
        langFileName: "py"
    },
    {
        langName:"C",
        langFileName: "c"
    }
] //array of objects


myCoding.forEach((item)=>{
    console.log(item.langFileName);
})