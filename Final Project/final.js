// Name:           Francis Ferdinard
// Date:           05/01/2024
// Description:    Final Project 

class Leaf {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const headNode = new Leaf(11);

const depth = [];
const breadth = [];

function addNode() {
    const inputValue = document.getElementById('inputValue').value.trim();

    if (inputValue !== "") {
        const newNode = new Leaf(inputValue);
        addToTree(headNode, newNode);
    } else {
        alert("Please enter a valid value to add to the tree.");
    }
}

function addToTree(node, newNode) {
    if (node.left === null) {
        node.left = newNode;
    } else if (node.right === null) {
        node.right = newNode;
    } else {
//      RECURSIVE TRAVERSAL
        addToTree(node.left, newNode);
    }
}

function depthFirstSearch(node = headNode) {
    depth.length = 0; // reset depth
    depthFirstSearchRecursive(node);

    let text = document.getElementById('depthoutput');
    text.innerHTML = depth.join(", ");
}

function depthFirstSearchRecursive(node) {
    if (node !== null) {
        depth.push(node.value);
        depthFirstSearchRecursive(node.left);
        depthFirstSearchRecursive(node.right);
    }
}

const breadthFirstSearch = () => {
    breadth.length = 0;
    const queue = [headNode];

    while (queue.length > 0) {
        const node = queue.shift();
        breadth.push(node.value);

        if (node.left !== null) {
            queue.push(node.left);
        }

        if (node.right !== null) {
            queue.push(node.right);
        }
    }

    let text = document.getElementById('breadthoutput');
    text.innerHTML = breadth.join(", ");
}