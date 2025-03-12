// Immediately Invoked Function Expression (IIFE)

//IIFE is used when we want immediate execution of our code 
// and it is also used to reduce the pollution of global variables

(function fun(){
    console.log(`Connected`);
})(); //named IIFE 

//NOTE: Always end the IIFE by ";" else it wouldnt know when to end and create problem

//normal IIFE
((name)=> console.log(`${name} is connected`)
)("TSS") //Given parameter and its a arrow function