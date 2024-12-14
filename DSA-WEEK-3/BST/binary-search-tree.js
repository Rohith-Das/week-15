class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class Binary{
    constructor(){
        this.root=null
    }
    insert(value){
        const node=new Node(value)
        if(!this.root){
            this.root=node
        }else{
           this.insertNode(this.root,node) 
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left === null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right ==null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(value,root=this.root){
        if(!this.root){
            return false
        }
        if(value === root.value){
            return true
        }
        if(value < root.value){
            return search(value,root.left)
        }else{
            return search(value,root.right)
        }
    }
    inorder(root=this.root,res=[]){
        if(root){
            this.inorder(root.left,res)
            res.push(root.value)
            this.inorder(root.right,res)
            
        }
        return res
    }
    
}
const binaryTree = new Binary();

// Insert values into the tree
binaryTree.insert(50);
binaryTree.insert(30);
binaryTree.insert(70);
binaryTree.insert(20);
binaryTree.insert(40);
binaryTree.insert(60);
binaryTree.insert(80);
console.log("inorder" ,binaryTree.inorder())




