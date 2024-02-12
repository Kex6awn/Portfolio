// ====================================== PART ONE =========================================

let welcomeContainer = document.querySelector('.welcome-container')
let usernameContainer = document.querySelector('.username-container');
let submitButton = document.querySelector('#submitButton');
let usernanme = document.querySelector('#username');
let welcomeHeading = document.querySelector('#welcomeHeading');
let quoteDiv = document.querySelector('#quoteDiv');


// const inputValue = usernanme.value;

submitButton.addEventListener('click', function() {
    const inputValue = usernanme.value;

    if (inputValue === "") {
        alert("Username is required") 
    }
    else {
        welcomeHeading.innerText = "Hi " + inputValue + "," + " Welcome to Quote Generator";
        usernameContainer.style.display = "none";
        welcomeContainer.style.display = "block";
    }
})

let continueHere = document.querySelector('#continueHere');
let changeQuoteBtnContainer = document.querySelector('.btn-container');

continueHere.addEventListener('click', function() {
    welcomeContainer.style.display = "none";
    quoteDiv.style.display = "block";

})

// =========================================================================================

let changeQuoteBtn = document.querySelector('#changeQuote');
let quote = document.querySelector('.quote');
let speaker = document.querySelector('.name');

const allQuote = [
    {
        quote: '"The purpose of our lives is to be happy."',
        speaker: 'Dalia Lama'
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        speaker: 'John Lennon'
    },
    {
        quote: '"You only live once, but if you do it right, once is enough."',
        speaker: 'Mae West'
    },
    {
        quote: '"It is during our darkest moments that we must focus to see the light."',
        speaker: 'Aristotle'
    }
];

for (i=0; i < allQuote.length; i++) {

    changeQuoteBtn.addEventListener('click', function() {
        let random = Math.floor(Math.random() * allQuote.length);
    
        quote.innerText = allQuote[random].quote;
        speaker.innerText = allQuote[random].speaker;
    })
    
}






// function displayOption() {
//     const quoteDiv = document.querySelector('#quoteDiv').style.display = "none";
//     document.querySelector('#questionsContainer').style.display = "block";

// }

// function continueButton() {
//     document.querySelector('#questionsContainer').style.display = "none";
//     document.querySelector('#quoteDiv1').style.display = "block";
// }

// function cancelButton() {
//     const quoteDiv = document.querySelector('#quoteDiv').style.display = "block";
//     document.querySelector('#questionsContainer').style.display = "none";
// }




// function displayOption() {
//     const quoteDiv = document.querySelector('#quoteDiv').style.display = "none";
//     document.querySelector('#questionsContainer').style.display = "block";
// }