
// IIFE Immediately invoked Function Expressions
// IIFE can be used to create a private scope for variables, preventing them from polluting the global scope.
// (function(a, b){
//     console.log(a+b);
// })(4,7);


// // In a scenario where you have multiple scripts on a page, an IIFE helps avoid variable name 
// // collisions by encapsulating code within a function.
// // Script 1
// (function() {
//     var sharedVariable = "Script 1";
//     console.log(sharedVariable);
// })();
  
// // Script 2
// (function() {
//     var sharedVariable = "Script 2";
//     console.log(sharedVariable);
// })();

// IIFE is often used to create a module pattern, allowing you to create private and public members within a module.
// var myModule = (function() {
//     var privateVariable = "I am private!";
  
//     function privateFunction() {
//       console.log("This is a private function.");
//     }
//     //we are not returning the above code so they remain private and doesn't pullute outside code.
//     return {
//       publicVariable: "I am public!",
//       publicFunction: function() {
//         console.log("This is a public function.");
//       }
//     };
//     //we are returning the above code meaning they remain publically available.
// })();
  
// console.log(myModule.publicVariable);
// myModule.publicFunction();
  
// // The following would throw an error, as privateVariable and privateFunction are not directly accessible.
// console.log(myModule.privateVariable);
// myModule.privateFunction();
  