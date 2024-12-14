class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdges(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }   
        if(!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdges(vertex1, vertex2) {
        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    }

    removeEdges(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            return null
        }

        for(let ajacentVertex of this.adjacencyList[vertex]) {
            this.removeEdges(vertex, ajacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    display() {
        for(let vertex in this.adjacencyList) {
            console.log(vertex + '~>' + [...this.adjacencyList[vertex]])
        }
    }

    bfs(start) {
        let queue = [start]
        let visited = new Set(start)
        let results = []

        while(queue.length) {
            let curr = queue.shift()
            results.push(curr)

            this.adjacencyList[curr].forEach(neighbour => {
                if(!visited.has(neighbour)) {
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            })
        }
        return results

    }

    dfs(node, visited = new Set(), results = []) {
        visited.add(node)
        results.push(node)

        this.adjacencyList[node].forEach(neighbour => {
            if(!visited.has(neighbour)) {
                this.dfs(neighbour, visited, results)
            }
        })
        return results
    }
}

const graph = new Graph


graph.addEdges('B', 'C')
graph.addEdges('A', 'B')
graph.addEdges('D', 'B')
graph.addEdges('D', 'A')

// graph.removeVertex('B')
graph.display()

console.log(graph.hasEdges('A', 'B'))

console.log(graph.bfs('A'))