// 6. Capitalize Each word
// eg. hello world / hello-World / hello-world / Hello-world / Hello_World
// o/p. Hello World

const prompt =  require("prompt-sync")();
let reg = / |-|_/g;

let str = prompt("Enter String(Separate word using- 'space , dash or underscore':-  ");

console.log("\nBefore Capitalize:-" + str);

let array = str.split(reg);

for( key in array){
    
    array[key] = array[key].replace(array[key].charAt(0),array[key].charAt(0).toUpperCase());
    
}

let finalStr = array.join(" ");
console.log("\nAfter Capitalize:-" + finalStr);


