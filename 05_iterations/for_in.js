//for in Loop

//Syntax:
// for (const key in object) {  
// }

const myObject = {
    'Game1': 'Minecraft',
    'Game2': 'Valorant'
}

for (const key in myObject) {
    //console.log(`${key} --> ${myObject[key]}`);
}

const arr=['a','b','c','d']

for (const key in arr) {
   //console.log(key); // Output: 0 1 2 3 //array also have keys ie index
   //console.log(arr[key]); //gives value
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")

for (const key in map) {
    //console.log(key); //Map are non-iterable
}