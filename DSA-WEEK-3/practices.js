class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if(this.isEmpty()) {
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if(newNode.value < root.value) {
            if(root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if(!root) {
            return false
        } else {
            if(root.value === value) {
                return true
            } else {
                if(value < root.value) {
                    return this.search(root.left, value)
                } else {
                    return this.search(root.right, value)
                }
            }
        }
    }

    print(root, space = 0, gap = 5) {
        if(!root) return
        
        space += gap
        
        this.print(root.right, space)
        console.log(' '.repeat(space - gap) + root.value)
        this.print(root.left, space)
    }

    preOrder(root) {
        if(root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if(root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if(root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder() {
        const queue = []
        queue.push(this.root)
        while(queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left) {
                queue.push(curr.left)
            }
            if(curr.right) {
                queue.push(curr.right)
            }
            
        }
    }

    min(root) {
        if(!root.left) {
            return root.value
        }else {
            return this.min(root.left)
        }
    }
    
    max(root) {
        if(!root.right) {
            return root.value
        }else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if(root === null) {
            return root
        }

        if(value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if(value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if(!root.left && !root.right) {
                return null
            }else if(!root.left) {
                return root.right
            }else if(!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    findClosestValue(target) {
        if(!this.root) {
            return null
        }

        let closest = this.root.value
        let node = this.root

        while(node !== null) {
            if(Math.abs(target - closest) > Math.abs(target - node.value)) {
                closest = node.value
            }

            if(target < node.value) {
                node = node.left
            }else if (target > node.value) {
                node = node.right
                
            }else {
                return node.value
            }
        }
        return closest
    }

    isBST(node, min = -Infinity, max = Infinity) {
        if(node === null) {
            return true
        }

        if(node.value <= min || node.value >= max) {
            return false
        }

        return this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max)
    }

    findSecondLargest(root) {
        if(!root || (!root.left && !root.right)) {
            return null
        }

        let parent = null
        let curr = root

        while(curr.right) {
            parent = curr
            curr = curr.right
        }

        if(curr.left) {
            return this.max(curr.left)
        }

        return parent.val
    }

    
}

const bst = new BinarySearchTree()

// console.log(bst.isEmpty())

bst.insert(10)
bst.insert(7)
bst.insert(20)
bst.insert(15)
bst.insert(3)
bst.insert(17)


bst.delete(10)
// bst.levelOrder()

// console.log(bst.findClosestValue(15))

// console.log(bst.max(bst.root))

// console.log(bst.isBST(bst.root))

console.log(bst.findSecondLargest(bst.root))