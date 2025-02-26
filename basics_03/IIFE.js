// Immediately Invoked Function Expression (IIFE)

(function fun(){
    console.log(`Connected`);
})(); //named IIFE 

//NOTE: Always end the IIFE by ";" else it wouldnt know when to end and create problem

//normal IIFE
((name)=> console.log(`${name} is connected`)
)("TSS") //Given parameter and its a arrow function