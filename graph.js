// Implementing graphs with JavaScript.

class Graph {
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
    this.adjList.set(v, []);
    // increment count of vertices
    this.vertices++;
  }

  // check whether a node/vertex is present
  hasVertex(v) {
    // return true/false
    return this.adjList.has(v);
  }

  // getting values of a vertex
  // getting neighbors of a vertex
  getNeighbors(v) {
    // check if vertex is valid
    if (!this.hasVertex(v)) {
      return false;
    } else {
      return this.adjList.get(v);
    }
  }

  updateVertex(v, val) {
    // check if vertex v exists
    // if not create one
    if (!this.hasVertex(v)) {
      this.addVertex(v);
    }

    // fetch the length of existing neighbors or adjacent nodes
    let prevLength = this.getNeighbors(v).length;

    // decrement no of edges by prev length
    this.edges -= prevLength;

    this.adjList.set(v, val);

    // increment no of edges with updated length;
    this.edges += val.length;

    // all elements inside val array should be a vertex
    // if not then create one
    val.forEach((el) => {
      if (!this.hasVertex(el)) {
        this.addVertex(el);
      }
    });
  }

  addEdge(v1, v2) {
    // check if graph has v1
    // if not add v1
    if (!this.hasVertex(v1)) {
      this.addVertex(v1);
    }

    // check if graph has v2
    // if not add v2
    if (!this.hasvertex(v2)) {
      this.addVertex(v2);
    }

    // Add v2 to v1 values
    let val = this.neighbors(v1);

    if (!val.includes(v2)) {
      val[val.length] = v2;
      this.edges++;
    }
  }

  hasEdge(v1, v2) {
    //checks if v1 and v2 are valid nodes or not
    // if not returns false
    if (!this.hasVertex(v1) || !this.hasVertex(v2)) return false;

    // get values of v1
    let val = this.neighbors(v1);
    //returns true or false
    if (val.includes(v2)) {
      return true;
    }
    return false;
  }

  noOfEdges() {
    return this.edges;
  }

  noOfVertices() {
    return this.vertices;
  }

  // resets the visited obj to an empty obj and calls _dfs()
  // level of search is Infinity by default
  dfs(v, level = Infinity) {
    this.visited = {};
    this._dfs(v, level);
  }

  // recursively calling _dfs to iterate along each branch
  _dfs(v, level) {
    // Skip if the node is already visited
    if (this.visited[v] === 1) {
      return;
    }
    // set visited as true
    this.visited[v] = 1;

    if (level) {
      // get value for all neighbor nodes
      let values = this.getNeighbors(v);

      // recursively call dfs for each vertex again
      values.forEach((value) => {
        console.log(`${v} ==> ${value}`);
        //
        this._dfs(value, level - 1);
      });
    }
  }

  bfs(v) {
    // resetting visited to empty obj
    this.visited = {};

    // We need to maintain a queue to know which node
    // to visit next
    // Also the vertex that has been chosen will be added
    // in the queue
    this.queue = [v];
    this.visited[v] = 1;

    // runs until queue is empty
    while (this.queue.length) {
      // get all the neighbor values for the vertex
      let values = this.getNeighbors(this.queue[0]);

      this.visited[this.queue[0]] = 1;

      // enqueue each of the neighbor vertices inside queue
      values.forEach((value) => {
        // prints as we iterate
        if (!this.visited[value]) {
          this.visited[value] = 1;
          console.log(this.queue[0] + "=>" + value);
          this.queue.push(value);
        }
      });
      // now as we have visited all its neighbors
      // dequeue the vertex from the queue
      this.queue.shift();
    }
  }
}

let graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.updateVertex(2, [1, 3]);
console.log(graph);
console.log(graph.hasVertex(2));
console.log(graph.hasVertex(5));
console.log(graph.getNeighbors(2));
graph.bfs(2);
