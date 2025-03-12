const accountId=16416
let accountEmail="abc@gmail.com"
var accountPassword="16464"
accountCity="Noida"
let accountState; //undefined

// accountId=2 //const cant be changed

console.log(accountId);
accountEmail="xyz@gmail.com";
accountPassword="1646"
accountCity="Hindon"

/*
Prefer not to use var bcz of 
issue of block scope and functional scope.
So use 'let'...
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

