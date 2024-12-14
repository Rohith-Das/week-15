class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class binaryTree{
    constructor(){
        this.root=null
    }
    isempty(){
        return this.root==null
    }
    insert(value){
        let node=new Node(value)
        if(this.isempty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left===null){
                root.left=node
            }
            else{
                this.insertNode(root.left,node)
            }
        }
        else{
            if(root.right === null){
               root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    order(root){
        if(root){
            this.order(root.left)
            console.log(root.value)
            this.order(root.right)
        }
    }
    pre(root){
        if(root){
            console.log(root.value)
            this.pre(root.left)
            this.pre(root.right)
        }
    }
    post(root){
        if(root){
            this.post(root.left)
            this.post(root.right)
            console.log(root.value)
        }
    }
  

}

const bst=new binaryTree()
bst.insert(10)
bst.insert(7)
bst.insert(20)
bst.insert(15)
bst.insert(3)
bst.insert(17)
console.log("order");

bst.order(bst.root)
console.log("preorder");
bst.pre(bst.root)
console.log("post-order");
bst.post(bst.root)