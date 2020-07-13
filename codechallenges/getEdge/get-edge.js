'use strict';

const GraphModule = require('../graph/graph');
const Vertex = GraphModule.Vertex;
const Graph = GraphModule.Graph;
/////////////////////////////////
/**
 * 
 * @param {itenerary} -> an array of cities 
 * @param {routmap} -> a graph with weighted edges connecting the cities 
 */
function hasDirectFlights(itenerary, routmap) {
  const adjlist = routmap._adjancyList;
  let i = 0;
  let cost = 0;
  while(itenerary[i+1]) {
    let city = itenerary[i];
    let neighborsArr = adjlist.get(city);
    neighborsArr.forEach(edge => {
      if (edge.vertex.value === itenerary[i+1].value) {
        cost += edge.weight;
      }
    });

    i++;
  }
  if (cost === 0) {
    return `False, 0$`;
  }
  else {
    return `True, ${cost}$`;
  }
}
/////////////////////////////////

//////////Test Example//////////

const routmap = new Graph();

const pandora = new Vertex('Pandora');
const arendella = new Vertex('Arendella');
const mitroville = new Vertex('Metroville');
const monstroplolis = new Vertex('Monstroplolis');
const narnia = new Vertex('Narnia');
const naboo = new Vertex('Naboo');

routmap.addNode(pandora);
routmap.addNode(arendella);
routmap.addNode(mitroville);
routmap.addNode(monstroplolis);
routmap.addNode(narnia);
routmap.addNode(naboo);

routmap.addEdge(pandora, arendella, 150);
routmap.addEdge(pandora, mitroville, 82);
routmap.addEdge(arendella, mitroville, 99);
routmap.addEdge(arendella, monstroplolis, 42);
routmap.addEdge(mitroville, narnia, 37);
routmap.addEdge(mitroville, naboo, 26);
routmap.addEdge(monstroplolis, mitroville, 105);
routmap.addEdge(monstroplolis, naboo, 73);

const itenerary1 = [mitroville, pandora];
console.log('[Metroville, Pandora]: ', hasDirectFlights(itenerary1, routmap));

const itenerary2 = [arendella, monstroplolis, naboo];
console.log('[Arendelle, New Monstropolis, Naboo]: ', hasDirectFlights(itenerary2, routmap));

const itenerary3 = [naboo, pandora];
console.log('[Naboo, Pandora]: ', hasDirectFlights(itenerary3, routmap));

const itenerary4 = [narnia, arendella, naboo];
console.log('[Narnia, Arendelle, Naboo]: ', hasDirectFlights(itenerary4, routmap));
