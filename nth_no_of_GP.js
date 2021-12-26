const a=prompt("enter first no of GP");
const r=prompt("enter common ratio");
const n= prompt("enter which term you want to find");
var gp=a * Math.floor(Math.pow(r, n - 1));
console.log("required num of GP is " + gp);
