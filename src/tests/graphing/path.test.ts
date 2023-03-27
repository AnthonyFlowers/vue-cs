import { Edge } from "../../components/graphing/edge";
import { Vertex } from "../../components/graphing/graph";
import { Path } from "../../components/graphing/path";

const testVerticies = {
  v1: new Vertex(0, { x: 5, y: 5 }),
  v2: new Vertex(1, { x: 10, y: 10 }),
  v3: new Vertex(2, { x: 20, y: 20 }),
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
