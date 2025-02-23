//Objects--> (1) Literals (2) Constructor(singleton)
//singleton:
//Object.create()

//Object literals:

const Sym=Symbol("K1")

const JSUser={
    name:"Tarun",
    "full name":"Tarun Sheoran",
    age:21,
    //Sym:"value1" //take this as string not symbol
    [Sym]:"value1", //correct method for symbol
    location:"Noida",
    email:"tss@google.com",
    IsLoggedIn:false,
    lastLoginDays:["Monday","Wednesday"]
}

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// //console.log(JSUser."full name"); //error so use square bracket
// console.log(JSUser["full name"]);
// console.log(JSUser["full name"]);
// // For symbol

// //console.log(JSUser.Sym); //not taking as symbol but as string
// console.log(JSUser[Sym]);


JSUser.email="tarun@google.com"
// Object.freeze(JSUser)
// JSUser.email="tarun@gpt.com"
//console.log(JSUser);


//Functions:

JSUser.greeting = function(){
    console.log("Hello JS User"); 
}

JSUser.greeting2 = function(){
    console.log(`Hello JS User,${this.name}`); 
}

console.log(JSUser.greeting());
console.log(JSUser.greeting2());



