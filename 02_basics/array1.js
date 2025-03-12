//Array Methods (contd..)

const marvel_heros=["thor","iron-man","spiderman"]
const dc_heros=["batman","flash","superman"]


//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3][2]);

// l=marvel_heros.concat(dc_heros) //generates a new array
// console.log(l);

// spread:
// const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);

//flat()
// const another_array =[1,2,3,[4,5,6],7,[9,4,[9,0]]]
// const real_another_array=another_array.flat(Infinity) //flattens the array and eliminates all sub arrays
// console.log(real_another_array);

console.log(Array.isArray("Tarun"));
console.log(Array.from("Tarun"));
console.log(Array.from({name: "Tarun"})); //give a empty array

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3));
