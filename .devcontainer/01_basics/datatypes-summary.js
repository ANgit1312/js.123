// 2 categorisation of data types
// on the basis -
//  how data is stored in memory
//how data is accessed

/********* PRIMITIVE *******///(CALL BY VALUE)
// 7 TYPES
// 1. STRING
// 2. NUMBER
// 3. BOOLEAN
// 4. null
// 5. undefined
// 6. SYMBOL
// 7. BIGINT

const score = 90;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;// type undefined

//symbol//
const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);//false - because symbol is unique

const bigNumber = 3456567892345789n

//console.log(typeof userEmail);



/**** REFERENCE ****/
// 3 TYPES
// 1. ARRAY
// 2. OBJECT
// 3. FUNCTIONS

const heros= ['Iron Man', 'Captain America', 'Thor']
let myObj = {
    name :"ankit",
    age : 21,
}

const myFunction = function(){
    //console.log("hello world");
    
}

//console.log(typeof myFunction);//return of function is called function object





/************ */
// stack (primitive), heap(non-primitive)

let myYtname = "ankit";

let anotherName = myYtname;
anotherName = "chaiaurcode"

console.log(myYtname);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@upi.com"
}

let userTwo = userOne;

userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
// both get the same reference in heap