import { Edge } from "../../components/graphing/edge";
import { Vertex } from "../../components/graphing/graph";
import { Prim } from "../../components/graphing/prim";
import _ from "lodash";

describe("Prims algorithm test suite", () => {
  test("should find path to self", () => {
    const graph = new Prim();
    const vertex = _.cloneDeep(testVerticies.vertexJ);
    vertex.distance = 0;
    graph.addVertex(vertex.position);
    const expectedEdge = new Edge(vertex, vertex, 0);

    const path = graph.findPath(vertex.id, vertex.id);

    expect(vertex.distance).toEqual(0);
    expect(path.length).toEqual(0);
  });

  test("should find path 1 edge away", () => {
    const graph = new Prim();
    const { vertexJ, vertexK } = testVerticies;
    const vertexJOnGraph = graph.addVertex(vertexJ.position);
    const vertexKOnGraph = graph.addVertex(vertexK.position);
    graph.addEdge(vertexJ.id, vertexK.id, 5);

    const path = graph.findPath(vertexJ.id, vertexK.id);
    // console.log(JSON.stringify(path, null, 2));
    expect(vertexJOnGraph.distance).toEqual(0);
    expect(vertexKOnGraph.distance).toEqual(5);
    expect(path.length).toEqual(5);
  });

  test("should find path 2 edges away", () => {
    const graph = new Prim();
    const { vertexJ, vertexK, vertexL } = testVerticies;
    const vertexJOnGraph = graph.addVertex(vertexJ.position);
    const vertexKOnGraph = graph.addVertex(vertexK.position);
    const vertexLOnGraph = graph.addVertex(vertexL.position);
    graph.addEdge(vertexJ.id, vertexK.id, 5);
    graph.addEdge(vertexK.id, vertexL.id, 5);
    const expectedOrder = [vertexJ.id, vertexK.id, vertexL.id];

    const path = graph.findPath(vertexJ.id, vertexL.id);

    expect(vertexJOnGraph.distance).toEqual(0);
    expect(vertexKOnGraph.distance).toEqual(5);
    expect(vertexLOnGraph.distance).toEqual(10);
    expect(path.length).toEqual(10);
  });

  test("should find path 3 edges away", () => {
    const graph = new Prim();
    const { vertexJ, vertexK, vertexL, vertexM } = testVerticies;
    const vertexJOnGraph = graph.addVertex(vertexJ.position);
    const vertexKOnGraph = graph.addVertex(vertexK.position);
    const vertexLOnGraph = graph.addVertex(vertexL.position);
    const vertexMOnGraph = graph.addVertex(vertexM.position);
    graph.addEdge(vertexJ.id, vertexK.id, 5);
    graph.addEdge(vertexK.id, vertexL.id, 5);
    graph.addEdge(vertexL.id, vertexM.id, 5);

    const path = graph.findPath(vertexJ.id, vertexM.id);

    expect(vertexJOnGraph.distance).toEqual(0);
    expect(vertexKOnGraph.distance).toEqual(5);
    expect(vertexLOnGraph.distance).toEqual(10);
    expect(vertexMOnGraph.distance).toEqual(15);
    expect(path.length).toEqual(15);
  });

  test("should find path using shortest edges", () => {
    const graph = new Prim();
    const { vertexJ, vertexK, vertexL, vertexM } = testVerticies;
    const vertexJOnGraph = graph.addVertex(vertexJ.position);
    const vertexKOnGraph = graph.addVertex(vertexK.position);
    const vertexLOnGraph = graph.addVertex(vertexL.position);
    const vertexMOnGraph = graph.addVertex(vertexM.position);
    graph.addEdge(vertexJ.id, vertexK.id, 1);
    graph.addEdge(vertexK.id, vertexL.id, 1);
    graph.addEdge(vertexL.id, vertexM.id, 1);
    graph.addEdge(vertexJ.id, vertexM.id, 5);

    const path = graph.findPath(vertexJ.id, vertexM.id);

    expect(vertexJOnGraph.distance).toEqual(0);
    expect(vertexKOnGraph.distance).toEqual(1);
    expect(vertexLOnGraph.distance).toEqual(2);
    expect(vertexMOnGraph.distance).toEqual(3);
    expect(path.length).toEqual(3);
    expect(path.containsVertex(vertexK.id)).toBeTruthy();
    expect(path.containsVertex(vertexL.id)).toBeTruthy();
  });

  test("should find path using barely shortest edges first", () => {
    const graph = new Prim();
    const { vertexJ, vertexK, vertexL, vertexM } = testVerticies;
    const vertexJOnGraph = graph.addVertex(vertexJ.position);
    const vertexKOnGraph = graph.addVertex(vertexK.position);
    const vertexLOnGraph = graph.addVertex(vertexL.position);
    const vertexMOnGraph = graph.addVertex(vertexM.position);
    graph.addEdge(vertexJ.id, vertexK.id, 4);
    graph.addEdge(vertexK.id, vertexL.id, 4);
    const shouldContainEdge = graph.addEdge(vertexL.id, vertexM.id, 4);
    const shouldNotContainEdge = graph.addEdge(vertexJ.id, vertexM.id, 12);

    const path = graph.findPath(vertexJ.id, vertexM.id);

    expect(vertexJOnGraph.distance).toEqual(0);
    expect(vertexKOnGraph.distance).toEqual(4);
    expect(vertexLOnGraph.distance).toEqual(8);
    expect(vertexMOnGraph.distance).toEqual(12);
    expect(path.length).toEqual(12);
    expect(path.containsVertex(vertexJ.id)).toBeTruthy();
    expect(path.containsVertex(vertexK.id)).toBeTruthy();
    expect(path.containsVertex(vertexL.id)).toBeTruthy();
    expect(path.contains(shouldContainEdge)).toBeTruthy();
    expect(path.contains(shouldNotContainEdge)).toBeFalsy();
  });

  test("should find path using shorter edge than other path", () => {
    const graph = new Prim();
    const { vertexJ, vertexK, vertexL, vertexM } = testVerticies;
    const vertexJOnGraph = graph.addVertex(vertexJ.position);
    const vertexKOnGraph = graph.addVertex(vertexK.position);
    const vertexLOnGraph = graph.addVertex(vertexL.position);
    const vertexMOnGraph = graph.addVertex(vertexM.position);
    graph.addEdge(vertexJ.id, vertexK.id, 1);
    graph.addEdge(vertexK.id, vertexL.id, 1);
    graph.addEdge(vertexL.id, vertexM.id, 6);
    graph.addEdge(vertexJ.id, vertexM.id, 5);

    const path = graph.findPath(vertexJ.id, vertexM.id);

    expect(vertexJOnGraph.distance).toEqual(0);
    expect(vertexKOnGraph.distance).toEqual(1);
    expect(vertexLOnGraph.distance).toEqual(2);
    expect(vertexMOnGraph.distance).toEqual(5);
    expect(path.length).toEqual(5);
    expect(path.containsVertex(vertexJ.id)).toBeTruthy();
    expect(path.containsVertex(vertexM.id)).toBeTruthy();
    expect(path.containsVertex(vertexK.id)).toBeFalsy();
    expect(path.containsVertex(vertexL.id)).toBeFalsy();
  });
});

export {};

const testVerticies = {
  vertexJ: new Vertex(0, { x: 1, y: 1 }),
  vertexK: new Vertex(1, { x: 3, y: 3 }),
  vertexL: new Vertex(2, { x: 5, y: 5 }),
  vertexM: new Vertex(3, { x: 7, y: 7 }),
};
