class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class binary{
    constructor(){
        this.root=null
    }
    isempty(){
        return this.root ===null
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
            if(root.left ===null){
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
    search(value,root=this.root){
        if(!this.root){
            return false
        }
        if(value === this.root){
            return true
        }
        if(value < root.value){
            this.search(value,root.left)
        }
        else{
            this.search(value,root.right)
        }
    }
    order(root){
        if(root){
            this.order(root.left)
            console.log(root.value)
            this.order(root.right)
        }
    }
    height(root){
        if(root ===null){
            return 0
        }
        const leftH=this.height(root.left)
        const rightH=this.height(root.right)
        return Math.max(leftH,rightH)+1
    }
    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root ===value){
            return root
        }
        if(value <root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            else if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }
}
const bst=new binary()
bst.insert(54)
bst.insert(78)
bst.insert(94)
bst.insert(38)
bst.order(bst.root)
// console.log("height",bst.height(bst.root))
console.log("delete ")
bst.delete(54)
bst.order(bst.root)
console.log("max=",bst.max(bst.root))
