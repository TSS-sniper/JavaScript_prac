// Dates
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let createDate = new Date(2024 ,3, 3) //0 se month start h in this format
// console.log(createDate.toDateString());

 let createDATE2 = new Date("01-26-2024")
// console.log(createDATE2.toLocaleString());

//TIMESTAMPS

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(createDATE2.getTime());

console.log(Math.floor(Date.now( )/1000)); // in seconds

console.log(myDate.getMonth()+1) // as it starts from 0
console.log(myDate.getFullYear())
console.log(myDate.getDay( ) + " day of the week");

console.log(myDate.toLocaleString('default',{
    weekday: "long",
    timeZone: 'Asia/Kolkata',
}));