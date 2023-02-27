// 2. Sort an array of numbers, (without using in-built function).

var num_array = [10,50,5,2,30,1];

console.log("\nBefore Sorted Array is:- " + num_array);

console.log("\nUsing Simple Loop:- ");

for(let i=0;i<num_array.length;i++){

    for(let j=i+1;j<num_array.length;j++){
        if(num_array[i] > num_array[j]){
            //swaping
            num_array[i] += num_array[j];
            num_array[j] = num_array[i] - num_array[j];
            num_array[i] = num_array[i] - num_array[j];
        }
    }
}

console.log("After Sorted Array is:- " + num_array + "\n");

var num_array = [10,50,5,2,30,1];

console.log("\nUsing map and reduce:- ");

let num = [...num_array]; //spread operator

let b = num_array.map((element,index)=>{

    c = num.reduce( (a1,a2) => {        

        return a1>a2 ? a2:a1 ;
    })
    
    let i = num.indexOf(c);
    num.splice(i,1);

    return c;

})

console.log("After Sorted Array is:- " + b  + "\n");