//console.log("2">1);
//console.log("02">1);

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

/*
Reason: "==" and "<,>,<=,>=" works differently
Comparisions converts NULL to numeric ie 0
thats why (3) null>=0 is True and (1) null > 0 is False
*/

//Strict Check (===):

console.log(null===0); //False
