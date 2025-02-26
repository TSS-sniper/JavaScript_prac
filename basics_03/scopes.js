let a = 202
// const b = 99
// var c = 77 //globally affects all

if(true){ //block scope start
    let a = 20
    const b = 99
    var c = 77
    //console.log("Inner: ",a);
    
} //block scope end

//console.log(b); //same
//console.log(c); //var
//console.log(a);


function one(){
    const username = "ABC"

    function two(){
        const website  = "YT"
        console.log(username);
    }
    //console.log(website); //gives error
    //two()
}
//two can access variables from one but one cant access variables from two
//one()

// if (true){
//     const username = "TSS"
//     if(username==="TSS"){
//         const web = " YT"
//         console.log(username + web);
//     }
    //console.log(web); //will give error 
//}
//console.log(username); //will give error

//=============================EXPRESSIONS and HOISTING==========================

console.log(addone(9)) //runs ok

function addone(num){
    return num + 1
}

//console.log(addtwo(9)); //will give error

const addtwo = function(num){ //expression
    return num+2
}

console.log(addtwo(2)); //runs ok


