
/*
Name:           Francis Ferdinard
Date:           1/25/2024
*/

/*

let argument = [5, 10, 15, 20];
let myInt = 10;
let myInt2 = 13;


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

*/

//
let createAnArray = [5, 10, 15, 20, 25, 30];
//let aNumber = 6;

let functionExpression = function(parameterOne) {
    parameterOne += 1;
    console.log(parameterOne);
}

function myFunction(functionExpression, aNumber) {
    if (aNumber % 2 == 0) {
        functionExpression = aNunber;
    }
    else {
        console.log('The number is odd');
    }
}

for (let i in createAnArray) {
    myFunction(functionExpression(i));
}

//
