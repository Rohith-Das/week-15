class Graph{
     constructor(){
        this.adjecencyList ={}
     }
     addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]=new Set()
        }
     }
     addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex[vertex1]
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex[vertex2]
        }
this.adjecencyList[vertex1].add(vertex2)
this.adjecencyList[vertex2].add(vertex1)
     }
     display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + "->" + [...this.adjecencyList[vertex]])
        }
     }
}
const graph=new Graph()
graph.addVertex("a")
graph.addVertex("b")
graph.addVertex("c")
graph.addEdge('a','b')
graph.addEdge('b','c')
graph.display() 
