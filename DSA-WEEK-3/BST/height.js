class Node{
    constructor(value){
        this.value=value
        this.left =null
        this.right=null
    }
}
class Binary{
    constructor(){
        this.root=null
    }
    isempty(){
        return this.root===null
    }
    insert(value){
        let node =new Node(value)
        if(this.isempty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
        
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left ===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right ===null){
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
            this.search(value,root.left)
        }else{
            this.search(value,root.right)
        }
    }
    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }
    getheight(root=this.root){
        if(root === null){
            return -1
        }
        const leftH=this.getheight(root.left)
        const rightH=this.getheight(root.right)
        return Math.max(leftH,rightH)+1;
    }
}
const bst=new Binary()
bst.insert(54)
bst.insert(78)
bst.insert(94)
bst.insert(38)
bst.inorder(bst.root)
console.log("height ",bst.getheight())