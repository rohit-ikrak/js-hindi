const myname = "Rohit"

const repoCount = 3

// console.log(myname + repoCount + " Value"); //avoid this type of string concatination.

console.log(`Hello myname is ${myname} and my repo count is ${repoCount}`);

const gameName = new String('Rohit Karki')
console.log(gameName[3]);
// console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newStr = gameName.substring(0,4); 
console.log(newStr);

const anotherStr = gameName.slice(0,4)
console.log(anotherStr);


const anStr = gameName.slice(1,-4)
console.log(anStr);

const url = "https://google%20mod.com";
const newurl = url.replace('%20','-');
console.log(newurl);
console.log(url.includes('mod'));

let a = url.split('.');

console.log(a[1] + a[0]);