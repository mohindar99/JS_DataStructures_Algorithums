// this is bubble sort algorithum

let arr = [12, 10, 8, 72, 60];

// this for loop is for the no of times the loop runs for each number

for (let i = 0; i < arr.length; i++) {

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
