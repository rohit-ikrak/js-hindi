//declaring an array

const arr = [1, 2, 3, 4, 5, 6, 5, 8, 9, 5];
// console.log(typeof arr);    //object
// console.log(Array.isArray(arr));    //true

//The code above indicates that array is actually an object as it has index attached to its values

// push() pop() shift() unshift()

// arr.push(12);           //pushes 12 at the end of the array
// console.log(arr)
// arr.pop();              //removes 12 from the end of the array
// console.log(arr)
// arr.shift()             //removes 0th index element
// console.log(arr);
// arr.unshift(4);         //adds in the 0th index while also shifting other values in next indexes
// console.log(arr);       // unshift is not appreciated in codes 

//Slice and Splice

// console.log("array before slice: " + arr);      
// let b = arr.slice(1,3);                         //slice takes index 1 and 2 but not 3             
// console.log(b);                                 // This doesn't change the array arr
// console.log("array after slice: " + arr);

// console.log("array before splice: " + arr);      
// let c = arr.splice(1,3);                         //slice takes index 1, 2 and 3             
// console.log(b);                                 // This  cuts and pastes the values of array arr in c
// console.log("array after splice: " + arr);

// let arr1=[1,2,3,4,5];
// let arr2=[5,6,7];
// let arr3 = arr1.concat(arr2);                       //using a.concat(b) to concat two arrays.
// console.log(arr3);
// console.log(arr1);                                  //Original array didnot change at all
// let arr4 = [...arr1, ...arr2, ...arr3];             //using [...a, ...b] to concat multiple arrays 
// console.log(arr4);

//index methods in array

// console.log(arr.indexOf(5));                            //first occurence of value 5
// console.log(arr.indexOf(5, 6));                         //index of occurence of value 5 after index 6 (included)
// console.log(arr.lastIndexOf(5));                         //last index of occurence of value 5
// console.log(arr.lastIndexOf(5, 6));                         //last index of occurence of value 5 from index 6 (included)

//join method in array

// const arr5 = [3, 5, 6, 7, 8, 9, 2];
// var joiningit = arr.join('-');                              //returns a string to joiningit
// console.log(joiningit);                                     //1-2-3-4-5-6-5-8-9-5
// console.log(typeof joiningit);                              //string 

//toString and toLocaleString

// const str1 = arr.toString();
// console.log(str1);                                              //1,2,3,4,5,6,5,8,9,5 
// console.log(typeof str1);                                       //string

// const str2 = arr.toLocaleString();
// console.log(str2);                                              //1,2,3,4,5,6,5,8,9,5 
// console.log(typeof str2);                                        //string

// filter() map() reduce() methods

