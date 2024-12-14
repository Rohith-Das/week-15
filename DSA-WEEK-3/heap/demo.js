class Maxheap{
    constructor(){
        this.heap=[]
    }
    insert(value){
        this.heap.push(value)
        this.heapifyup();
    }
    heapifyup(){
        let index=this.heap.length-1;
        while(index >0){
            let parent=Math.floor((index-1)/2);
            [this.heap[index],this.heap[parent]]=[this.heap[parent],this.heap[index]]
            index=parent;
        }
    }
    display(){
        console.log(this.heap)
    }
    heapifyDown(){
        let index=0;
        while(index < this.heap.length){
            let left=2*index+1
            let right=2*index+2
            let large=index;
            if(left < this.heap.length && this.heap[left]>this.heap[large]){
                large=left;
            }
            if(large === index){
                break;
            }
            [this.heap[index],this.heap[large]]=[this.heap[large],this.heap[index]]
            index=large;
        }
    }

}
const heap=new Maxheap()
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(15);
heap.display();

