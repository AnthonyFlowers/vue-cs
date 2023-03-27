import { Edge } from "../../components/graphing/edge";
import { Vertex } from "../../components/graphing/graph";

const testVerticies = {
  v1: {
    id: 0,
    position: { x: 5, y: 5 },
  } as Vertex,
  v2: {
    id: 1,
    position: { x: 10, y: 10 },
  } as Vertex,
  v3: {
    id: 2,
    position: { x: 20, y: 20 },
  } as Vertex,
};

describe("Edge test suite", () => {
  test("should create edge", () => {
    const edge = new Edge(testVerticies.v1, testVerticies.v2, 5);
    const expectedLength = 5;

    expect(edge.distance).toEqual(expectedLength);
  });

  test("should contain first vertex", () => {
    const edge = new Edge(testVerticies.v1, testVerticies.v2, 5);
    const expectedLength = 5;

    expect(edge.contains(testVerticies.v1.id)).toBeTruthy();
  });

  test("should contain second vertex", () => {
    const edge = new Edge(testVerticies.v1, testVerticies.v2, 5);
    const expectedLength = 5;

    expect(edge.contains(testVerticies.v2.id)).toBeTruthy();
  });

  test("should get position differences", () => {
    const edge = new Edge(testVerticies.v1, testVerticies.v2, 1);
    const expectedDiff = { xDiff: 5, yDiff: 5 };

    expect(edge.diffs()).toEqual(expectedDiff);
  });

  test("should get edge midpoint", () => {
    const edge = new Edge(testVerticies.v2, testVerticies.v3, 1);
    const expectedMidpoint = { x: 15, y: 15 };

    expect(edge.midPoint()).toEqual(expectedMidpoint);
  });

  test("should get other vertex side one", () => {
    const edge = new Edge(testVerticies.v1, testVerticies.v2, 1);
    const expectedVertex = testVerticies.v1;

    expect(edge.other(testVerticies.v2.id)).toEqual(expectedVertex);
  });

  test("should get other vertex side two", () => {
    const edge = new Edge(testVerticies.v2, testVerticies.v1, 1);
    const expectedVertex = testVerticies.v1;

    expect(edge.other(testVerticies.v2.id)).toEqual(expectedVertex);
  });

  test("should equal", () => {
    const edge = new Edge(testVerticies.v1, testVerticies.v2, 1);
    const otherEdge = new Edge(testVerticies.v1, testVerticies.v2, 1);

    expect(edge.equals(otherEdge)).toBeTruthy();
  });

  test("should not equal", () => {
    const edge = new Edge(testVerticies.v1, testVerticies.v2, 1);
    const otherEdge = new Edge(testVerticies.v1, testVerticies.v3, 1);

    expect(edge.equals(otherEdge)).toBeFalsy();
  });

  test("should equal flipped", () => {
    const edge = new Edge(testVerticies.v1, testVerticies.v2, 1);
    const otherEdge = new Edge(testVerticies.v2, testVerticies.v1, 1);

    expect(edge.equals(otherEdge)).toBeTruthy();
  });

  test("should not equal flipped", () => {
    const edge = new Edge(testVerticies.v1, testVerticies.v2, 1);
    const otherEdge = new Edge(testVerticies.v3, testVerticies.v1, 1);

    expect(edge.equals(otherEdge)).toBeFalsy();
  });
});

export {};
