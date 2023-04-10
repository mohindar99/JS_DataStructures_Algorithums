// merging the array using the for loop

let data1 = [3, 4, 5, 6, 9, 4, 2, 8];
let data2 = [23, 3, 45, 65, 7, 89];
let data3 = [];

// for (let i = 0; i < data1.length; i++) {
//     data3[i] = data1[i];
// }
// for (let j = 0; j < data2.length; j++) {
//     data3[j+data1.length] = data2[j];
// }
// console.log(data3);

// merging the array using default spread operator

data3 = [...data1, ...data2];
console.log(data3);