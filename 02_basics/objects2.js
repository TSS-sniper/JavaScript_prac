//Object in Object
const regUser = {
    email:"tss@gmail.com",
    fullname: {
        userFN:{
            firstname:"tarun",
            lastname:"Sheoran"
        }
    }
}

// console.log(regUser.fullname.userFN.firstname);
// console.log(regUser.fullname?.userFN.firstname); //checks if fullname exists or not

//Merging Objects

const obj1 ={1:"q",2:"e"}
const obj2 ={3:"l",4:"er"}
const obj4 ={5:"lg",6:"fer"}

const obj3=Object.assign({},obj1,obj2)
//const obj3=Object.assign(obj1,obj2) //wouldnt give expected result if more than 2 objs are there
//console.log(obj3);

//OR

const obj5 ={...obj1,...obj2,...obj4} //spread operator
//console.log(obj5);


const SO = {
    name: "Tarun",
    age: 25,
    isLoggedIn :true
}

// console.log(Object.keys(SO));
// console.log(Object.values(SO));
// console.log(SO.hasOwnProperty("IsLoggedIn"));

//Destructuring of Objects

const course ={
    name: "Course 1",
    price: "888",
    Instructor: "Tarun"
}

const {Instructor: i} = course

//console.log(Instructor);
console.log(i);


