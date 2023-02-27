// 4. Remove duplicate values from an array
//     A = [1, 5, 11, 'A', 'B', 'a', 'b', 3, 5, 7, 'z', 'd', 'b']

let A = [1, 5, 11, 'A', 'B', 'a', 'b', 3, 5, 7, 'z', 'd', 'b']

console.log("Before Duplicate Remove:-" + A);

A = Array.from(new Set(A));

console.log("After Duplicate Remove:-" + A);