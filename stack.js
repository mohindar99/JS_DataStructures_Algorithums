// Uisng stack in data structures

let data = [];
let currentSize = data.length;
let max = 5;

function Push(newVal) {
  if (currentSize >= max) {
    console.log("stack is full");
  }
  data[currentSize] = newVal;
  currentSize++;
}

Push(20);
Push(23);
Push(13);
Push(53);
Push(73);
Push(83);
Push(183);

function pop() {
  if (currentSize <= 0) {
    console.log("stack is already empty");
  }
  currentSize--;
  data.length = currentSize;
}
pop();

console.log(data);
