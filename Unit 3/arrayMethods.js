let myArray = [];

function update() {
    outputParagraph = document.getElementById('output');
    outputParagraph.innerHTML = myArray.reduce((result, val, index) => {
        return result + index + ". " + val + '<br>';
    }, "");
}

function pushArray() {
    inputValue = document.getElementById('input').value;
    if (inputValue !== '') {
        myArray.push(inputValue);
        update();
    }
}

function popArray() {
    if (myArray.length > 0) {
        myArray.pop();
        update();
    }
}

function unshiftArray() {
    inputValue = document.getElementById('input').value;
    if (inputValue !== '') {
        myArray.unshift(inputValue);
        update();
    }
}

function shiftArray() {
    if (myArray.length > 0) {
        myArray.shift();
        update();
    }
}

function arrayMap() {
    inputValue = document.getElementById('input').value;
    if (inputValue !== '') {
        myArray = myArray.map(item => item + inputValue);
        update();
    }
}