// Memory : Stack (Primitive) and Heap (Non-Primitive)

let name1 = "Aalo";
let name2= name1;
name2="Pyaaz";
console.log(name1);
console.log(name2);

// It will give different output as original value is not changed
//In Stack, a copy of original value is given to new variable so it remains independent from the original.

//Now taking an object:

let userOne = {
    name: "Tarun Sheoran",
    Id: "JakeOfTrade"
}

let userTwo = userOne
userTwo.Id = "BlackJake";

console.log(userOne);
console.log(userTwo);

//it will give same output as original value is changed.
//In Heap, a reference to the original vlaue is given So new variable shares the memory location with the original one.
//And Any change in New variable will cause change in the original value 