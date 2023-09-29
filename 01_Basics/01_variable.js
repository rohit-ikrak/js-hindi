const acctId = 12345
let acctEmail = "rohit@google.com"
/*
    prefer not to use var
    b/c of issue in block scope and functional scope
*/
var acctPwd = "1234"    // don't use var
acctCity = "Jaipur"
let acctState;
//acctId = 2  //not allowed

acctEmail = "naman@google.com"
acctPwd = 1221
acctCity = "delhi"

console.table([acctEmail, acctId, acctPwd, acctCity, acctState])



