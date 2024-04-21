
// Name:           Francis Ferdinard
// Date:           04/21/2024
// Description:    Algorithms

class Leaf {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const headNode = new Leaf(1);
headNode.left = new Leaf(2);
headNode.right = new Leaf(3);
headNode.left.left = new Leaf(4);
headNode.left.right = new Leaf(5);
headNode.right.left = new Leaf(6);
headNode.right.right = new Leaf(7);
headNode.left.left.left = new Leaf(8);
headNode.left.left.right = new Leaf(9);
headNode.left.right.left = new Leaf(10);

const depth = [];
const breadth = [];

function depthFirstSearch(node = headNode) {
    if (node !== null) {
        depth.push(node.value);
        depthFirstSearch(node.left);
        depthFirstSearch(node.right);
    }

    let text = document.getElementById('depthoutput');
    text.innerHTML = depth;
}

function breadthFirstSearch() {
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
    text.innerHTML = breadth;
}