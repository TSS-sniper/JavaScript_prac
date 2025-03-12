const userEmail = "abc@xyz.ai"

if (userEmail){
    console.log("Got a Email");
} else{
    console.log("No Mail");
}

//Falsy values:
//false,0,-0, 0n (BigInt), "", null, Undefined, NaN

// Some truthy Values:
// "0" (string),'false'(string)," "(string) ,function(){} (Empty Function)

//check if array is empty

const arr =[]
if(arr.length==0){
    console.log("Empty");
}

//check if object is empty

const empObj={}
if (Object.keys(empObj).length === 0){
    console.log("Empty object");  
}

//Nullish Coalescing Operator (??): Made for null,undefined

//The nullish coalescing (??) operator is a logical operator that 
//returns its right-hand side operand when its left-hand side operand is 
//null or undefined, and otherwise returns its left-hand side operand.

const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"

const baz = 40 ?? 42;
console.log(baz);
// Expected output: 40

let val1 = null??20??30 //takes the first value ie 20
console.log(val1);


//Ternary Operator (condition? true:false)

const price=20
price>10? console.log("Yes"):console.log("No");