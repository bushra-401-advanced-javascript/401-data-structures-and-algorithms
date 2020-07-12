'use strict';

const GraphModule = require('../graph/graph');
const Vertex = GraphModule.Vertex;
const Graph = GraphModule.Graph;

class BreadthFirst extends Graph {

  bfs(startNode) {
    const queue = [];  
    const vistedNodes = new Set(); 

    queue.push(startNode);
    vistedNodes.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();

      const neighbors = this.getNeighbors(currentNode);
            
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if(vistedNodes.has(neighborNode)) {
          continue;
        } else {
          vistedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    console.log({vistedNodes});
        
    return vistedNodes;
  }
}

/////////////////////////////////
const graph = new BreadthFirst();

const pandora = new Vertex('Pandora');
const arendella = new Vertex('Arendella');
const mitroville = new Vertex('Metroville');
const monstroplolis = new Vertex('Monstroplolis');
const narnia = new Vertex('Narnia');
const naboo = new Vertex('Naboo');

graph.addNode(pandora);
graph.addNode(arendella);
graph.addNode(mitroville);
graph.addNode(monstroplolis);
graph.addNode(narnia);
graph.addNode(naboo);

graph.addEdge(pandora, arendella);
graph.addEdge(arendella, mitroville);
graph.addEdge(arendella, monstroplolis);
graph.addEdge(mitroville, narnia);
graph.addEdge(mitroville, naboo);
graph.addEdge(monstroplolis, mitroville);
graph.addEdge(monstroplolis, naboo);


// console.log(graph._adjancyList.entries());

// console.log('Neighbors of node pandora: ', graph.getNeighbors(pandora));
// console.log('Neighbors of node arendella: ', graph.getNeighbors(arendella));
// console.log('Neighbors of node mitroville: ', graph.getNeighbors(mitroville));
// console.log('Neighbors of node monstroplolis: ', graph.getNeighbors(monstroplolis));

graph.bfs(pandora);
