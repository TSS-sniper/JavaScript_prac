function func1(){
    console.log("T");
    console.log("a");
    console.log("r");
    console.log("u");
    console.log("n");
}

// func1 //give reference of function
// func1()

// function add2Num(n1,n2){
//     console.log(n1+n2)
// }


function improved_add2Num(n1,n2){
    let result = n1+n2
    return result
    //or return n1+n2
    console.log("Unreachable Code"); //never gets printed
    
}

// add2Num(9,null)
// add2Num(6,"k") //concatenate
// add2Num(6,"3") //concatenate

const result = improved_add2Num(9,5)
//console.log("Result: ",result);

function LogInUserMsg(username){
    if(!username){
        console.log("Please enter a username");
        return 0
    }
    return `${username} just logged In`
}

//console.log(LogInUserMsg("TSS"))
//console.log(LogInUserMsg()) //gives undefined


function CalcCartPrice(val1,...num1){ //here "..." is rest operator
    return num1
}

//console.log(CalcCartPrice(100,200,300)); //returns array
// val1=100 and rest in num1 as array ie [200,300]

const user1 = {
    username: "Mr.T",
    bill: 100
}

function handleUser(anyobject){
    console.log(`User name is ${anyobject.username} and his bill is of ${anyobject.bill}`);  
}

//handleUser(user1)
//alternative call method

handleUser({username: "Yeti",
    bill:500
})
