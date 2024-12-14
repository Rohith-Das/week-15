class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (!root.left) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (!root.right) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    inorder(root) {
        if (root) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }

    // Function to check if two trees are identical
    areIdentical(root1, root2) {
        // If both trees are empty, they are identical
        if (root1 === null && root2 === null) {
            return true;
        }
        // If one tree is empty and the other is not, they are not identical
        if (root1 === null || root2 === null) {
            return false;
        }
        // If the values of the nodes are different, they are not identical
        if (root1.value !== root2.value) {
            return false;
        }
        // Recursively check the left and right subtrees
        return this.areIdentical(root1.left, root2.left) && this.areIdentical(root1.right, root2.right);
    }
}

// Create the binary trees and test
const tree1 = new BinaryTree();
tree1.insert(10);
tree1.insert(7);
tree1.insert(20);
tree1.insert(15);
tree1.insert(3);

const tree2 = new BinaryTree();
tree2.insert(10);
tree2.insert(7);
tree2.insert(20);
tree2.insert(15);
tree2.insert(3);

const tree3 = new BinaryTree();
tree3.insert(10);
tree3.insert(5);
tree3.insert(20);
tree3.insert(15);
tree3.insert(3);

console.log("Tree1 and Tree2 are identical:", tree1.areIdentical(tree1.root, tree2.root)); // Expected: true
console.log("Tree1 and Tree3 are identical:", tree1.areIdentical(tree1.root, tree3.root)); // Expected: false
