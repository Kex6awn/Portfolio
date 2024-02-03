/*
Name:       Francis Ferdinard
Date:       1/17/2024
*/

// let newVariable = 9;
// let secondVariable = 10;

// let total = newVariable + secondVariable;

// console.log(total);

// let questionsAndAnswers = prompt("What is your favorite food?");

// console.log("The user entered" + " " + questionsAndAnswers);


//Assignment #2

// For Loop, If statement, and increment
/*
Name:       Francis Ferdinard
Date:       1/22/2024
*/

// let numberVariable = 5;

// for ( i = 0; i < 5; i++) {
//     numberVariable++;
    
//     if (numberVariable % 2 != 0) {
//         console.log(numberVariable);
//     }
// }



// Dom Manipulation Assignment

const containerDiv = document.querySelector('div');

for (let i = 0; i < 5; i++) {
    
    const paragraphElememt = document.createElement('p');
    containerDiv.append(paragraphElememt)

    // Modify the HTML
    
    paragraphElememt.innerText = 'This is a paragraph';
}

function changeColor() {
    document.querySelector('body').style.backgroundColor = 'black';
    containerDiv.style.backgroundColor = '#FDDDE6';
}