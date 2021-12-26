const n=prompt("enter no to check prime");
for(var i=2;i<Math.sqrt(n);i++){
    if(n%i==0){
        console.log("number is not prime");
    }
    else{
         console.log("number is prime");
    }
}
