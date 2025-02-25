let a = 202
// const b = 99
// var c = 77 //globally affects all

if(true){ //block scope start
    let a = 20
    const b = 99
    var c = 77
    console.log("Inner: ",a);
    
} //block scope end

//console.log(b); //same
//console.log(c); //var
console.log(a);

