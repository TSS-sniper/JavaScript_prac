//Maps and chaining

const myNum = [1,2,3,4,5,6,7,8,9,10]
//map:

// const mnum= myNum.map((n)=>{
//     return n+10
// })


//chaining
const num = myNum
            .map((n)=>n*10) //its o/p will be nexts i/p
            .map((n)=>n+2)
            .filter((n)=>n>=40)

console.log(num);
console.log(mnum);
            
