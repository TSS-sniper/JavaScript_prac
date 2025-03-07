//reduce

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

//console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2000
    },
    {
        itemName: "py course",
        price: 1000
    },
    {
        itemName: "mobile dev course",
        price: 5000
    },
    {
        itemName: "data science course",
        price: 12000
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

const arr = [1,2,3,4,5,6,7,8,9]

const value = arr.reduce((acc,i)=>i+acc,0)
//console.log(value);
