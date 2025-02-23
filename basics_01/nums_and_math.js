/*
const score=300
console.log(score);

const bal= new Number(90000);
console.log(bal);

console.log(bal.toString().length);
console.log(bal.toFixed(2));

const otherNum = 124.20934982
console.log(otherNum.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
*/

//+++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-67)); //returns the absolute value
console.log(Math.round(5.3261));
console.log(Math.ceil(2.4));
console.log(Math.floor(2.7));
console.log(Math.sqrt(25));
console.log(Math.min(25,41,4,45));
console.log(Math.max(25,41,4,45));

console.log(Math.random()); //Value btw 0 and 1
console.log(Math.floor(Math.random()*10 + 1))

const min =10
const max=20
console.log(Math.floor(Math.random() * (max-min+1) + min)) //Return a random number between min & max