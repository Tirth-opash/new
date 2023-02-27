// 3. following pattern, using a nested for loop
// *  
// * *  
// * * *  
// * * * *  
// * * * * *


const prompt =  require("prompt-sync")();
const n = prompt("Please Enter n:- ",5);
// npm install prompt-sync    - command for prompt run

for(i=0;i<n;i++){

    let star = "";

    for(j=0;j<i+1;j++){
        star+="* ";            
    }
    
    console.log(star + "\n");
}