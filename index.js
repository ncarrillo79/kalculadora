const sum = require("./src/sum.js");
const substract = require("./src/substract.js");
const multiply = require("./src/multiply.js");
const div = require("./src/div.js");

var a = 15;
var b = 5;

console.log(sum.soma(a, b));
console.log(substract.subs(a, b));
console.log(multiply.multiply(a, b));
console.log(div.divide(a, b));

//exports.module={a,b}
