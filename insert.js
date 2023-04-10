// insertion using loops

let data = [4, 32, 3, 7, 65, 45, 67];
let newEL = 5;
let index = 4;

for (let i = data.length - 1; i >= index; i--) {
  data[i + 1] = data[i];
  if (i == index) {
    data[i] = newEL;
  }
}
//console.log(data);

// insertion using defaultfunctions
data.splice(4, 0, 5);
console.log(data);
