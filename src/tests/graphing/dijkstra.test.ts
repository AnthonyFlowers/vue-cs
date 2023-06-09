import { Dijkstra } from "../../components/graphing/dijkstra";

describe("Dijkstra algorithm test suite", () => {
  test("should find path to self", () => {
    const graph = new Dijkstra();
    const vertexJ = graph.addVertex({ x: 1, y: 1 });
    graph.addEdge(vertexJ.id, vertexJ.id, 0);

    const result = graph.findPath(vertexJ.id, vertexJ.id);

    expect(result.length).toBe(0);
  });

  test("should find path 1 edge away", () => {
    const graph = new Dijkstra();
    const { vertexJ, vertexK } = testVerticies;
    graph.addVertex(vertexJ.position);
    graph.addVertex(vertexK.position);
    const edge = graph.addEdge(vertexJ.id, vertexK.id, 5);

    const result = graph.findPath(vertexJ.id, vertexK.id);

    expect(result.getEdges()).toContainEqual(edge);
    expect(result.length).toBe(5);
  });

  test("should find path 2 edges away", () => {
    const graph = new Dijkstra();
    const { vertexJ, vertexK, vertexL } = testVerticies;
    [vertexJ, vertexK, vertexL].forEach((v) => graph.addVertex(v.position));
    const edgeJ = graph.addEdge(vertexJ.id, vertexK.id, 5);
    const edgeK = graph.addEdge(vertexK.id, vertexL.id, 5);

    const result = graph.findPath(vertexJ.id, vertexL.id);

    expect(result.getEdges()).toContainEqual(edgeJ);
    expect(result.getEdges()).toContainEqual(edgeK);
    expect(result.length).toBe(10);
  });

  test("should find path 3 edges away", () => {
    const graph = new Dijkstra();
    const { vertexJ, vertexK, vertexL, vertexM } = testVerticies;
    [vertexJ, vertexK, vertexL, vertexM].forEach((v) =>
      graph.addVertex(v.position)
    );

    const edgeJ = graph.addEdge(vertexJ.id, vertexK.id, 5);
    const edgeK = graph.addEdge(vertexK.id, vertexL.id, 5);
    const edgeL = graph.addEdge(vertexL.id, vertexM.id, 5);

    const result = graph.findPath(vertexJ.id, vertexM.id);

    expect(result.getEdges()).toContainEqual(edgeJ);
    expect(result.getEdges()).toContainEqual(edgeK);
    expect(result.getEdges()).toContainEqual(edgeL);
    expect(result.length).toBe(15);
  });

  test("should find shorter path 1 edge away", () => {
    const graph = new Dijkstra();
    const { vertexJ, vertexK, vertexL, vertexM } = testVerticies;
    [vertexJ, vertexK, vertexL, vertexM].forEach((v) =>
      graph.addVertex(v.position)
    );
    graph.addEdge(vertexJ.id, vertexK.id, 5);
    graph.addEdge(vertexK.id, vertexL.id, 5);
    graph.addEdge(vertexL.id, vertexM.id, 5);
    const edgeM = graph.addEdge(vertexJ.id, vertexM.id, 5);

    const result = graph.findPath(vertexJ.id, vertexM.id);

    expect(result.getEdges()).toContainEqual(edgeM);
    expect(result.length).toBe(5);
  });

  test("should find path 1 edge away multiple options", () => {
    const graph = new Dijkstra();
    const { vertexJ, vertexK, vertexL, vertexM } = testVerticies;
    [vertexJ, vertexK, vertexL, vertexM].forEach((v) =>
      graph.addVertex(v.position)
    );
    graph.addEdge(vertexJ.id, vertexK.id, 5);
    graph.addEdge(vertexJ.id, vertexL.id, 4);
    graph.addEdge(vertexJ.id, vertexM.id, 1);

    const result = graph.findPath(vertexJ.id, vertexM.id);

    expect(result.length).toBe(1);
  });

  test("should not find path", () => {
    const graph = new Dijkstra();
    const { vertexJ, vertexK, vertexL } = testVerticies;
    [vertexJ, vertexK, vertexL].forEach((v) => graph.addVertex(v.position));

    graph.addEdge(vertexJ.id, vertexK.id, 5);
    const path = graph.findPath(vertexJ.id, vertexL.id);

    expect(path.length).toEqual(0);
    expect(path.getEdges()).toEqual([]);
  });

  test("edge removed should not find path", () => {
    const graph = new Dijkstra();
    const { vertexJ, vertexK, vertexL } = testVerticies;
    [vertexJ, vertexK, vertexL].forEach((v) => graph.addVertex(v.position));

    const edge = graph.addEdge(vertexJ.id, vertexK.id, 5);
    graph.removeEdge(edge);
    const path = graph.findPath(vertexJ.id, vertexK.id);

    expect(path.length).toEqual(0);
    expect(path.getEdges()).toEqual([]);
  });

  test("should throw vertex not found error", () => {
    const graph = new Dijkstra();
    expect(() => {
      graph.findPath(0, 0);
    }).toThrow("Could not find a vertex with the id: 0");
  });
});

export {};

const testVerticies = {
  vertexJ: { id: 0, position: { x: 1, y: 1 } },
  vertexK: { id: 1, position: { x: 3, y: 3 } },
  vertexL: { id: 2, position: { x: 5, y: 5 } },
  vertexM: { id: 3, position: { x: 7, y: 7 } },
};
