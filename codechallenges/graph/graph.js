'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjancyList = new Map();
  }
    
  /** addNode()
   * Adds a new node to the graph
   * Takes in the value of that node
   * Returns the added node
   */
  addNode(node) { //takes a value as an argument and creates a new node (vertex) with that value
    this._adjancyList.set(node, []);
    return {node, adjecencyList: this._adjancyList.get(node)};
  }
  /** addEdge()
   * Adds a new edge between two nodes in the graph
   * Include the ability to have a “weight”
   * Takes in the two nodes to be connected by the edge
       * Both nodes should already be in the Graph
  */
  addEdge(startVertex, endVertex, weight) { //takes two nodes (vertices) as an argument, not values
    if (!this._adjancyList.has(startVertex)) {
      console.log(`The Vertex ${JSON.stringify(startVertex)} Is Not Found.`);
    } 
    else if(!this._adjancyList.has(endVertex)) {
      console.log(`The Vertex ${JSON.stringify(endVertex)} Is Not Found.`);
    } 
    else {
      // get the neighbours of the start vertex and add to them 
      const adjacencies = this._adjancyList.get(startVertex);
      // add edge with vertex and weight
      adjacencies.push(new Edge(endVertex, weight));
    }
  }

  /** getNodes()
   * Returns all of the nodes in the graph as a collection
   */
  getNodes() {
    console.log(this._adjancyList.entries());
    return this._adjancyList.entries();
  }

  /** getNeighbors()
   * Returns a collection of edges connected to the given node
   * Takes in a given node
   * Include the weight of the connection in the returned collection
  */
  getNeighbors(node) {
    if (this._adjancyList.has(node)) {
      return this._adjancyList.get(node);
    } else {
      console.log('vertex does not exist!!');
    }
  }

  /** size()
   * Returns the total number of nodes in the graph
   */
  size() {
    let keys = [];
    for (const key of this._adjancyList.keys()) {
      keys.push(key.value);
    }
    console.log('size: ', keys.length);
    return keys.length;
  }
}


module.exports = {Vertex, Edge, Graph};

const graph = new Graph();

const two = new Vertex(2);
const three = new Vertex(3);
// const six = new Vertex(6);
const seven = new Vertex(7);
// const eight = new Vertex(8);
// const ten = new Vertex(10);

graph.addNode(two);
graph.addNode(three);
// graph.addNode(six);
graph.addNode(seven);
// graph.addNode(eight);
// graph.addNode(ten);

graph.addEdge(two, seven);

// graph.getNodes();

// console.log(graph);

// console.log('Neighbors of node two: ', graph.getNeighbors(two));

// graph.size();
