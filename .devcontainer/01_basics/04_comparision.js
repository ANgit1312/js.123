// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 >= 1)
// console.log(2 != 1) 
// no proble in all above mentioned

// console.log("2" > 1);//true
// console.log("02" > 1);//true


console.log(null  > 0);//false
console.log(null == 0);//false
console.log(null != 0);//true
console.log(null >= 0);//true

/* An equality check == and comparisions(<, <=, >=, >) work diffrently.
comparisions convert null to a number, treating it as 0. thats why the above mentionded result. */

console.log(undefined == 0);//false(always false even with comparision oprators)

console.log(null == undefined);//true


// strict check

console.log("2" == 2);//true
console.log("2" === 2);//false
//in strict check it also check the data type. No conversion
