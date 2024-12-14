class Node{
    constructor(value){
        this.value = value
        this.left=null
        this.right=null
    }
}
class binaryTree{
    constructor(){
        this.root=null
    }
    isempty(){
        return this.root===null
    }
    insert(value){
        let node=new Node(value)
        if(this.isempty()){
            this.root=node
        }
        else{
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
        }
        else{
            if(root.right === null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    findClose(target){
        let close=this.root.value
        let curr=this.root
        while(curr !==null){
            if(Math.abs(target - close) > Math.abs(target-curr.value)){
                close=curr.value
            }
            if(target < curr.value){
                curr=curr.left
            }
            else if(targest > curr.value){
                curr=curr.right
            }else{
                break;
            }
        }
        return close
    }
}
const bst=new binaryTree()
bst.insert(10);
bst.insert(7);
bst.insert(20);
bst.insert(15);
bst.insert(3);
bst.insert(17);
const targest=12;
console.log(bst.findClose(targest)); 
