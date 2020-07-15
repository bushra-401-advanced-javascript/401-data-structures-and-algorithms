'use strict';

const GraphModule = require('../graph/graph');
const Vertex = GraphModule.Vertex;
const Graph = GraphModule.Graph;

function depthFirst(adjList) {
  const stack = [];
  const vistedNodes = new Set();
  const startNode = Array.from(adjList)[0];

  stack.push(startNode);
  vistedNodes.add(startNode);

  while (stack.length) {

    const currentNode = stack.pop();

    let neighbors;
    if (adjList.has(currentNode[0])) {
      neighbors = adjList.get(currentNode[0]);
    //   console.log('\n', neighbors);
    } else {
      console.log(`vertex: ${currentNode} does not exist..`);
    }

    for (let neighbor of neighbors) {

      const neighborNode = neighbor.vertex;

      if (vistedNodes.has(neighborNode)) {
        continue;
      } else {
        vistedNodes.add(neighborNode);
      }
      stack.push(neighborNode);
    }
  }

  return vistedNodes;
}

////////////////////////////////////
const graph = new Graph();

const a = new Vertex('A');
const b = new Vertex('B');
const c = new Vertex('C');
const d = new Vertex('D');
const e = new Vertex('E');
const f = new Vertex('F');
const g = new Vertex('G');
const h = new Vertex('H');

graph.addNode(a);
graph.addNode(b);
graph.addNode(c);
graph.addNode(d);
graph.addNode(e);
graph.addNode(f);
graph.addNode(g);
graph.addNode(h);

graph.addEdge(a, b);
graph.addEdge(a, d);
graph.addEdge(d, f);
graph.addEdge(f, h);
graph.addEdge(h, d);
graph.addEdge(d, e);
graph.addEdge(b, c);
graph.addEdge(c, g);

console.log(depthFirst(graph._adjancyList));
