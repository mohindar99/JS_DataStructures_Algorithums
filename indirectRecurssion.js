let money = 100;
let totalapple = 0;

function buyApple(x) { 
    if (x > 0) {
        console.log("I have", x, "RS", "and", totalapple, "apples");
        buymore(x-10);
    } else { 
        console.log("I dont have more money and the total apples are" ,totalapple);
    }
}
function buymore(x1) {  
    totalapple++;
    buyApple(x1);
   // console.log("final money left is ", x1); // runs this print statement but will not print it. and makes sure to print after all the things
}

buyApple(100);