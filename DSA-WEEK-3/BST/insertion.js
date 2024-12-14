class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinaryClassTree{
    constructor(){
        this.root=null
    }
    isempty(){
        return this.root === null
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
                this.insetNode(root.left,node)
            }
        }else{
            if(root.right ===null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
        
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }
            else if(value < root.value){
                return this.search(root.left,value)
            }
            else{
                return this.search(root.right,value)
            }
        }
    }
    
}
const bst=new BinaryClassTree()
console.log(bst.isempty())
bst.insert(8)
bst.insert(9)
bst.insert(23)
bst.insert(42)
console.log(bst.search(bst.root,8))
