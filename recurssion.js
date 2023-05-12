// This is recurrsion topic

// Infinite loop possibilities

// function apple(item) {
//     console.log(item);
//     apple(item);
// }
// apple(5);

// Usage of recurssion in if-else cases

// function apple(item) {
//     console.log(item);
//     if (item < 10)
//         apple(item + 1);
// }

// let data = 0;
// apple(data);

// Usage of recurrsion in a factorial statement

function factorial(item) { 
    if (item == 0) { 
        return 1;
    }
    return item * factorial(item - 1);
}
let data = 5;
console.log(factorial(data));







