function last(){var a = "global";
console.log(a);
function first(){
    
    
    
    function second(){
       
        console.log(a);
    }
    second();
}
first();
}
last();
console.log('3' - -'3');
var bool = !bool;
console.log(bool);
var abool = abool || false;
console.log(abool);

console.log(typeof(bool));
delete bool;
console.log(bool);
console.log(2+"7");
console.log(typeof(2+"7"));
console.log(true-5);
console.log(false+1);
console.log(false);
// Falsy values: false, "", 0, -0, NaN, null, undefined
// Truthy values: true, "text", 72, -73, Infinity, -Infinity, {}, []
const abc=1;
console.log(abc);

function cda(){
    var c = 10

    console.log(c);
}

cda()
console.log(c);
var ans = (function(){
    var privateval = 12;
    return {
        getter: function(){
            console.log(privateval);
        },
        setter: function(val){
            privateval = val;
        }
    }
})();
ans.setter(12);
ans.getter();
var obj = {name: "abc"}
console.log(obj.name);

var sheryiansStudent = {
    canMakeAmazingWebsites:true, 
    canMakeAwesomeAnimations:true
}
var human = {
    canWalk:true,
    canTalk: true,
    canRun: true,
    canEat: true
}

sheryiansStudent.__proto__ = human;

console.log(sheryiansStudent.__proto__.canWalk);

console.log(this);
function abcd(){
    console.log(this);
}
abcd();
var obj = {
    name: "Rohit",
    word: function(){
        console.log(this);
    }
}
//this keyword always refers to parent object

var button = document.querySelector("button");
button.addEventListener("click", function(){
    this.style.color = "red";
});
