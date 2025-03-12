/*let score = "99aa"
console.log(typeof score); //method1
console.log(typeof (score)); //as method

let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
*/

/*
"33" -> 33
"33abc" -> NaN
true -> 1
false -> 0
null -> 0
undefined ->  NaN
*/

/*let isLoginIn="jjjjj"
let boolIsLoginIn=Boolean(isLoginIn)
console.log(boolIsLoginIn);
console.log(typeof boolIsLoginIn);
*/

/*
1 => true
0 => false
"" => false
"abc" => true
*/

/*let cutie = 66
let stringvariable = String(cutie)
console.log(stringvariable, typeof stringvariable)
*/

/***************OPERATIONS****************/

console.log(+""); //gives 0
console.log(+"d"); //gives NaN
console.log(+true); //gives 1


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
