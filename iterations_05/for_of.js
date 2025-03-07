// FOR OF LOOP

// for (const element of object) {
    
// }

const arr =[1,2,3,4,5]

// for (const i of arr) {
//     console.log(i);
// }

const greeting = "Hello World"

// for (const i of greeting) {
//     console.log(`Each Char is : ${i}`); 
// }

// MAPS:

//The Map object holds key-value pairs and remembers the original insertion 
// order of the keys. Any value (both objects and primitive values) may be used 
// as either a key or a value.

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")

//console.log(map);

for (const [key,value] of map) {
    console.log(key,"=",value);
}

const myObject = {
    'Game1': 'Minecraft',
    'Game2': 'Valorant'
}

// for (const [i,j] of myObject) {
//     console.log(i,'-->',j); //give error as object is not iterable via this method   
// }