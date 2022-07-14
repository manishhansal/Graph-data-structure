// Implementing graphs with JavaScript.

class Graph{
    constructor() {
        this.adjList = new Map();
        this.vertices = 0;
        this.edges = 0;
        this.visited = {};
    }

    // functionalities.

    // to add a vertex
    addVertex(v) {
        // creates a vertex
        this.adjList.set(v, [])
        // increment count of vertices
        this.vertices++;
    }

    // check whether a node/vertex is present
    hasVertex(v) {
        // return true/false
        return this.adjList.has(v)
    }

    // getting values of a vertex
    // getting neighbors of a vertex
    getNeighbors(v) {
        // check if vertex is valid
        if (!this.hasVertex(v)) {
            return false;
        }
        else {
            return this.adjList.get(v);
        }
    }
}

let graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);

console.log(graph);
console.log(graph.hasVertex(2));
console.log(graph.hasVertex(5));
console.log(graph.getNeighbors(2));