// 1. Create a function to convert number to million, billion format.
//     for eg. 1000 = 1K, 1000000 = 1M, 1234 = 1.2K

const prompt =  require("prompt-sync")();
const n = prompt("Please Enter number:- ",1000);
// npm install prompt-sync    - command for prompt run in terminal

function numberFormateChange(num){
    if(num>=1000 && num<1000000){
        let n = num/1000;
        return parseFloat(n.toFixed(1)) + "K";
    }
    else if(num>=1000000 && num<1000000000){
        return parseFloat((num/1000000).toFixed(1)) + "M";
    }
    else if(num>=1000000000){
        return parseFloat((num/1000000000).toFixed(1)) + "B";
    }
    else{
        return num;
    }
}

let text = numberFormateChange(n);

console.log(text);