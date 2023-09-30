// Stack for primitive datatypes, Heap memory for Non-primitive datatypes

// Example of a Stack memory allocation

let myname = "Rohit" //string

let yourname = myname; //copy of the myname value will be given to yourname

// values of the variables
console.log("myname = " + myname);
console.log("yourname = " + yourname);

// now if we allocate other value in yourname,  it won't change value at myname.

yourname = "Mohit" // other name

console.log("after some changes in yourname:");

console.log("myname = " + myname);
console.log("yourname = " + yourname);

// Example of Heap memory allocation

let data1 = {
    name: "rohit",
    place: "delhi"
};  //the data is placed in heap memory whose reference is given to data1 and the data1 variable is placed in stack.

let data2 = data1; //data2 takes the reference of the data that is stored in heap memory.

// values of the variables
console.log("data1.name = " + data1.name);
console.log("data2.name = " + data2.name);

// now if we allocate other value in data2,  it will change value at data1.

data2.name = "Rohit Karki"; // other name
data2.place = "New Delhi";

console.log("after some changes in data2:");

console.log("data1.name = " + data1.name);
console.log("data2.name = " + data2.name);