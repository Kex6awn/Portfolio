let argument = [5, 10, 15, 20];
let myInt = 10;
let myInt2 = 13;

/*
Name:           Francis Ferdinard
Date:           1/25/2024
*/

let firstFunction = function(singleParameter) {
    singleParameter += 1;
    return singleParameter;
}

function newFunction(func, secondParameter) {
    var myTotal = secondParameter
    if (secondParameter % 2 == 0) {
        myTotal = func(secondParameter);
        console.log("This number is even so I added one.");
        console.log(myTotal);
    }
    else {
        console.log("This number is odd so I didn't change the number");
        console.log(myTotal);
    }
}

for (let x in argument) {
    newFunction(firstFunction, argument[x]);
}