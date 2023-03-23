import { Edge } from "../../components/graphing/edge";
import { Vertex } from "../../components/graphing/graph";
import { Path } from "../../components/graphing/path";

const testVerticies = {
  v1: {
    id: 0,
    position: { x: 5, y: 5 },
    distance: Number.MAX_SAFE_INTEGER,
  },
  v2: {
    id: 1,
    position: { x: 10, y: 10 },
    distance: Number.MAX_SAFE_INTEGER,
  },
  v3: {
    id: 2,
    position: { x: 20, y: 20 },
    distance: Number.MAX_SAFE_INTEGER,
  },
};

const testEdges = {
  e1: new Edge(testVerticies.v1, testVerticies.v2, 5),
  e2: new Edge(testVerticies.v2, testVerticies.v3, 10),
};

describe("Path test suite", () => {
  test("should create path", () => {
    const path = new Path([]);
    const expectedEdges: Edge[] = [];

    expect(path.getEdges()).toEqual(expectedEdges);
  });

  test("should add edge to path", () => {
    const path = new Path();
    const expectedEdge: Edge = new Edge(testVerticies.v1, testVerticies.v2, 5);

    path.addEdge(testEdges.e1);

    expect(path.getEdges()).toContainEqual(expectedEdge);
  });

  test("should contain edge", () => {
    const path = new Path();
    const expectedEdge: Edge = new Edge(testVerticies.v2, testVerticies.v3, 10);

    path.addEdge(testEdges.e2);

    expect(path.contains(expectedEdge)).toBeTruthy();
  });

  test("should not contain edge", () => {
    const path = new Path();

    path.addEdge(testEdges.e2);

    expect(path.contains(testEdges.e1)).toBeFalsy();
  });
});

export {};
