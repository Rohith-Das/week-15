class MaxHeap {
    constructor() {
        this.heap = []
    }

    insert(value) {
        this.heap.push(value)
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.heap.length - 1
        let element = this.heap[idx]
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.heap[parentIdx]
            if(element <= parent) break
            this.heap[parentIdx] = element
            this.heap[idx] = parent
            idx = parentIdx 
        }
    }

    extractMax() {
        if(this.heap.length === 0) {
            return null
        }

        if(this.heap.length === 1) {
            return this.heap.pop()
        }

        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0, this.heap.length)

        return max
    }
    

    
    bubbleDown(i, heapSize) {
        let maxIdx = i
        let left = 2 * maxIdx + 1
        let right = 2 * maxIdx + 2

        if(left < heapSize && this.heap[left] > this.heap[maxIdx]) {
            maxIdx = left
        }

        if(right < heapSize && this.heap[right] > this.heap[maxIdx]) {
            maxIdx = right
        }

        if(i !== maxIdx) {
            [this.heap[i], this.heap[maxIdx]] = [this.heap[maxIdx], this.heap[i]]
            this.bubbleDown(maxIdx, heapSize)
        }
    }

    buildMaxHeap(arr) {
        this.heap = arr
        
        for(let i = Math.floor(this.heap.length/2) - 1; i >= 0; i--) {
            this.bubbleDown(i, this.heap.length)
        }
    }

    heapSort(arr) {
        this.buildMaxHeap(arr)

        for(let i = this.heap.length - 1; i > 0; i--) {
            [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]]
            
            this.bubbleDown(0, i)
        }
        return this.heap
    }

    display() {
        return console.log(this.heap)
    }
}


let heap = new MaxHeap()

heap.insert(12)
heap.insert(1)
heap.insert(92)
heap.insert(13)
heap.insert(21)
heap.insert(19)
heap.insert(55)
heap.insert(60)



// heap.display()

console.log(heap.extractMax())

// heap.display()

// console.log(heap.heapSort([9,5,7,3,1,10,65,21]))