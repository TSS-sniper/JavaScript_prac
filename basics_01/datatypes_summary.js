/*

(1) Primitive:
7 types:
String
Number
Boolean
null
undefined
Symbol
BigInt

(2) Reference/ Non-Primitive:
Functions
Array
Objects

*/

// JavaScript is a dynamically typed language.
//This means that variable types are determined at runtime,
//and you do not need to explicitly declare the type of a variable before using it.
//You can assign different types of values to a variable during its lifetime.


//Symbol example:

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id==anotherid);

 // Arrays, Objects and Functions

 const heros =["Naaagu", "Batman","Superman"]

 let obj={
    name:"tarun",
    age:20,
 }

 const MyFunc =function(){
    console.log("Hallo");
 }

 console.log(typeof  heros);  // Output : object

 //NULL's typeof comes to be "object"