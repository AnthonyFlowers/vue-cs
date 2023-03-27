import { Edge } from "../../components/graphing/edge";
import { Graph } from "../../components/graphing/graph";
import { Path } from "../../components/graphing/path";

class TestGraph extends Graph {
  findPath(fromvertexId: number, tovertexId: number): Path {
    throw new Error("Method not implemented.");
  }
}

describe("Graph test suite", () => {
  test("should create empty graph", () => {
    const graph = new TestGraph();
    const expectedEdgeCount = 0;
    const expectedVertexCount = 0;
    expect(graph.getEdges().length).toBe(expectedEdgeCount);
    expect(graph.getVerticies().length).toBe(expectedVertexCount);
  });

  test("should get an empty path", () => {
    const graph = new TestGraph();
    const expectedPath: Edge[] = [];

    const path = graph.getPath();

    expect(path).toEqual(expectedPath);
  });

  test("should add vertex to graph", () => {
    const graph = new TestGraph();
    const expectedVertexCount = 1;

    graph.addVertex({ x: 5, y: 5 });

    expect(graph.getVerticies().length).toBe(expectedVertexCount);
  });

  test("should find vertex on graph", () => {
    const graph = new TestGraph();
    const expectedVertexCount = 1;

    graph.addVertex({ x: 5, y: 5 });

    expect(graph.pointExists({ x: 5, y: 5 })).toBeTruthy();
    expect(graph.pointExists({ x: 4, y: 4 })).toBeTruthy();
    expect(graph.pointExists({ x: 6, y: 6 })).toBeTruthy();
    expect(graph.getVerticies().length).toBe(expectedVertexCount);
  });

  test("should not find vertex on graph", () => {
    const graph = new TestGraph();
    const expectedVertexCount = 1;

    graph.addVertex({ x: 70, y: 70 });

    expect(graph.pointExists({ x: 140, y: 140 })).toBeFalsy();
    expect(graph.pointExists({ x: 0, y: 0 })).toBeFalsy();
    expect(graph.getVerticies().length).toBe(expectedVertexCount);
  });

  test("should add edge to graph", () => {
    const graph = new TestGraph();
    graph.addVertex({ x: 1, y: 1 });
    graph.addVertex({ x: 3, y: 3 });

    const expected = {
      vertexOne: {
        id: 0,
        position: { x: 1, y: 1 },
        distance: Number.MAX_SAFE_INTEGER,
      },
      vertexTwo: {
        id: 1,
        position: { x: 3, y: 3 },
        distance: Number.MAX_SAFE_INTEGER,
      },
      distance: 5,
    };

    const result = graph.addEdge(0, 1, 5);

    expect(result).toEqual(expected);
  });

  test("should find edge on graph", () => {
    const graph = new TestGraph();
    graph.addVertex({ x: 1, y: 1 });
    graph.addVertex({ x: 3, y: 3 });

    const expected = {
      vertexOne: {
        id: 0,
        position: { x: 1, y: 1 },
        distance: Number.MAX_SAFE_INTEGER,
      },
      vertexTwo: {
        id: 1,
        position: { x: 3, y: 3 },
        distance: Number.MAX_SAFE_INTEGER,
      },
      distance: 5,
    };

    const result = graph.addEdge(0, 1, 5);

    expect(graph.edgeExists(0, 1)).toBeTruthy();
    expect(graph.edgeExists(1, 0)).toBeTruthy();
    expect(result).toEqual(expected);
  });

  test("should not find edge on graph", () => {
    const graph = new TestGraph();
    graph.addVertex({ x: 1, y: 1 });
    graph.addVertex({ x: 3, y: 3 });
    graph.addVertex({ x: 5, y: 5 });

    const expected = {
      vertexOne: {
        id: 0,
        position: { x: 1, y: 1 },
        distance: Number.MAX_SAFE_INTEGER,
      },
      vertexTwo: {
        id: 1,
        position: { x: 3, y: 3 },
        distance: Number.MAX_SAFE_INTEGER,
      },
      distance: 5,
    };

    const result = graph.addEdge(0, 1, 5);

    expect(graph.edgeExists(0, 2)).toBeFalsy();
    expect(graph.edgeExists(2, 0)).toBeFalsy();
    expect(graph.edgeExists(1, 2)).toBeFalsy();
    expect(graph.edgeExists(2, 1)).toBeFalsy();
    expect(result).toEqual(expected);
  });
});

export {};
