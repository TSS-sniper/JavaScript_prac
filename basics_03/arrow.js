const user = {
    username:"TSS",
    price:55000,
    welcomeMsg: function(){
        console.log(`${this.username}, Welcome`);
        console.log(this); //here value is unchanged
    }
}
//this refers to the current context of the object ie 
// current values of object...

// user.welcomeMsg()
// user.username="Tarun" //context changed ie value changed
// user.welcomeMsg()

//console.log(this) //gives {}

//Normal Function
function fun() {
let username="TSS"
console.log(this.username);
}
fun()

//Arrow Function

const fun2 = () => {
    let username = "Raju"
    console.log(this); 
}
fun2()

// In Arrow we can explictly or implictly return the values

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } //explictly here

// const addTwo = (num1, num2) =>  num1 + num2 //implictly returns value here

const addTwo = (num1, num2) => ( num1 + num2 )

const objt = () => ({username: "TSS"})


console.log(addTwo(3, 4))
