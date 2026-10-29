console.log("HI!");

let name = "Deepu";
const college = "REVA";

console.log(name, college);
//if (x=10){
  //  console.log(x);
 //}
 //else {

    //}

    function greet (){
        console.log('Hello RCB!!');
    }

    greet();

// Expression Function
const add = function (a,b) {
    return a + b;
};

console.log(add(2,3));

// Arrow Function
const text = (name) => {
    return 'Hello' + name;
};
console.log(text('Deepu'));

// Anonymous Function
setTimeout(Function() {
     console.log('This will run for 2 seconds!');
},2000);

// Callback Function
function calc(x,y.op) {
    return op(x,y);
}
console.log(calc(2,3),(x,y) =>x,y);

// Eligibility to vote
let age = prompt("Enter your age: ");

if (age >= 18) {
    console.log("You are eligible to vote!");
} else {
    console.log("You are not eligible to vote.");
}

// Currency Converter
const convert = function(rupees) {
    return rupees / 80;
}
console.log(convert(8000));


function changebg() {
    let r = Math.random() * 255; 
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    let body_bg = document.querySelector('body');
    body_bg.style.cssText = `background-color: rgb(${r}, ${g}, ${b})`;
}
 function changebg() {
    let h2_bg = document.querySelector('#rgb');
h2_bg.innerHTML = RGB: (${r}, ${g}, ${b})`;
 }
 

let mode = document.getElementById('mode');
let body = document.querySelector('body');
