const n=prompt("which term of fabonacci you want to find");
var first=0;
var secound=1;
var count=2;
while(count<n){
    c=first+secound;
    count++;
    first=secound;
    secound=c;
}
console.log(n +"th fabonacci number is" + c);
