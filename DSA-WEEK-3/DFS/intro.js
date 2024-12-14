class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinaryTree{
    constructor(){
        this.root=null
    }
    insert(value){
        let node=new Node(value)
        if(!this.root){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }
        else{
            if(root.right ===null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    levelOrder(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}
const Binary=new BinaryTree()
Binary.insert(10)
Binary.insert(5)
Binary.insert(15)
Binary.insert(3)
Binary.insert(12)
Binary.insert(20)
Binary.levelOrder()