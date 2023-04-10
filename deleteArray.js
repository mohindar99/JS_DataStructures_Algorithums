// deletion using loops

// delete single elements
let data = [30, 70, 34, 44, 5, 6, 78];
let position = 5;

// for (let i = position; i < data.length; i++) {
//   data[i] = data[i + 1];
// }
// data.length = data.length - 1;

// console.log(data);

// // delete using default functions

// data.splice(position, 1);

// console.log(data);

//deleting multiple elements using loops

let items = 2;
for (let i = position; i < data.length; i++) {
  data[i] = data[i + items];
}
data.length = data.length - items;
console.log(data);
