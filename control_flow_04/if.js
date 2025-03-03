//if

// if (2==="2"){
//     console.log("executed");
// }
// else{
//     console.log("Not executed");}

// <,>,<=,>=,==,===,!== conditional operators


const score = 200

if(score>100){
    const power = "fly" //not global
    // console.log(`User Power is ${power}`);
}

// console.log(`User Power is ${power}`); //gives error as "power" is out of scope


//Short hand notation
//const  bal = 1000
// if (bal>900) console.log("noice"),
// console.log("execute"); //implict scope

// if(bal<500){
//     console.log("less than 500");
    
// }
// else if(bal<750){
//     console.log("Less than 750 and more than 500");
// }
// else{
//     console.log("Greater than 750")
// }


const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const LoggedInfromEmail = true

if (userLoggedIn && debitCard) { //AND
    console.log("allowed to buy");
}

if (loggedInfromGoogle || LoggedInfromEmail){ //OR
    console.log("User Logged In");
}
