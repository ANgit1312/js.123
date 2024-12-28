const accountId = 144
let accountEmail = "ankit@gmail.com"
var accountPassword = "password123"
accountCity = "jaipur"

let accountState;
//accountId = 2//not allowed
accountEmail = "hc@gm.com"
accountPassword = "12345"
accountCity = "delhi"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);

/* 
prefer not to use var, because of issue in block scope
and functional scope


*/